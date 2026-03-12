import React, { useEffect } from "react";
import {
  List,
  ActionPanel,
  Action,
  showToast,
  Toast,
  Icon,
} from "@raycast/api";
import path from "path";
import { getRelativeTime, loadProjects, openWithEditor } from "./utils";
import { EditorType } from "./types";
import { usePromise } from "@raycast/utils";
import { homedir } from "os";

const EDITOR_CONFIG: Record<EditorType, { title: string; icon: Icon }> = {
  antigravity: { title: "Open with Antigravity", icon: Icon.Rocket },
  cursor: { title: "Open with Cursor", icon: Icon.Code },
  code: { title: "Open with VS Code", icon: Icon.Code },
  trae: { title: "Open with Trae", icon: Icon.Code },
};

export function ProjectList({ editor }: { editor: EditorType }) {
  const {
    data: projects,
    isLoading,
    error,
  } = usePromise(async () => {
    return await loadProjects();
  });

  useEffect(() => {
    if (error) {
      console.error("Error loading projects: ", error);
      showToast({
        style: Toast.Style.Failure,
        title: "Something went wrong: ",
        message: error.message,
      });
    }
  }, [error]);

  const { title, icon } = EDITOR_CONFIG[editor];

  return (
    <List isLoading={isLoading} searchBarPlaceholder="Search projects...">
      {projects && projects.length > 0 ? (
        <List.Section title="Projects" subtitle={`${projects.length} projects`}>
          {projects.map((project) => (
            <List.Item
              key={project.path}
              title={project.name}
              subtitle={path.dirname(project.path).replace(homedir(), "~")}
              icon={{ fileIcon: project.path }}
              accessories={[
                {
                  text: getRelativeTime(project.lastModifiedTime),
                },
                {
                  icon: Icon.Folder,
                },
              ]}
              actions={
                <ActionPanel>
                  <Action
                    title={title}
                    icon={icon}
                    onAction={async () => await openWithEditor(editor, project.path)}
                  />
                  <Action.ShowInFinder path={project.path} />
                  <Action.CopyToClipboard
                    title="Copy Path"
                    content={project.path}
                    shortcut={{ modifiers: ["cmd"], key: "c" }}
                  />
                </ActionPanel>
              }
            />
          ))}
        </List.Section>
      ) : (
        <List.EmptyView
          title="No projects found"
          description="Check your projects directory in preferences"
          icon={Icon.Folder}
        />
      )}
    </List>
  );
}

export default function Command() {
  return <ProjectList editor="antigravity" />;
}
