/// <reference types="../raycast-env.d.ts" />

import { homedir } from "os";
import path from "path";
import { config } from "dotenv";
import { getPreferenceValues } from "@raycast/api";

config();

const DEFAULT_IGNORED_FOLDERS_PATTERN =
  /^\.|^(node_modules|venv|__pycache__|target|dist|build|vendor|bower_components)$/;

export function getIgnoredFoldersPattern(): RegExp {
  try {
    const preferences = getPreferenceValues<Preferences>();
    if (preferences.ignoredFoldersPattern) {
      return new RegExp(preferences.ignoredFoldersPattern);
    }
  } catch (error) {
    console.warn("Error reading ignoredFoldersPattern preference:", error);
  }

  if (process.env.ANTIGRAVITY_IGNORED_FOLDERS_PATTERN) {
    try {
      return new RegExp(process.env.ANTIGRAVITY_IGNORED_FOLDERS_PATTERN);
    } catch (error) {
      console.warn(
        "Invalid regex in ANTIGRAVITY_IGNORED_FOLDERS_PATTERN:",
        error,
      );
    }
  }

  return DEFAULT_IGNORED_FOLDERS_PATTERN;
}

export function getEditorCommandPath(editor: "antigravity" | "cursor" | "code" | "trae"): string {
  const prefKeys: Record<string, keyof Preferences> = {
    antigravity: "agyCommandPath",
    cursor: "cursorCommandPath",
    code: "codeCommandPath",
    trae: "traeCommandPath",
  };
  const envKeys: Record<string, string> = {
    antigravity: "ANTIGRAVITY_AGY_PATH",
    cursor: "CURSOR_COMMAND_PATH",
    code: "CODE_COMMAND_PATH",
    trae: "TRAE_COMMAND_PATH",
  };
  const defaults: Record<string, string> = {
    antigravity: path.join(homedir(), ".antigravity", "antigravity", "bin", "agy"),
    cursor: "cursor",
    code: "code",
    trae: "trae",
  };

  try {
    const preferences = getPreferenceValues<Preferences>();
    const value = preferences[prefKeys[editor]] as string;
    if (value) return value;
  } catch {
    // Ignore errors when reading preferences
  }

  const envValue = process.env[envKeys[editor]];
  if (envValue) return envValue;

  return defaults[editor];
}

export function getDefaultSearchFolder(): string {
  try {
    const preferences = getPreferenceValues<Preferences>();
    if (preferences.projectsDirectory) {
      return preferences.projectsDirectory;
    }
  } catch {
    // Ignore errors when reading preferences
  }

  if (process.env.ANTIGRAVITY_PROJECTS_DIR) {
    return process.env.ANTIGRAVITY_PROJECTS_DIR;
  }

  return path.join(homedir(), "Code");
}
