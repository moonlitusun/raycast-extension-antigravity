/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** Projects Directory - The path to the directory to search for projects */
  "projectsDirectory": string,
  /** Search Depth - How many levels deep to search for folders (1-5) */
  "searchDepth": string,
  /** Antigravity Command Path - Full path to the agy command (leave empty to use default: ~/.antigravity/antigravity/bin/agy) */
  "agyCommandPath": string,
  /** Cursor Command Path - Full path to the cursor command (leave empty to use default: cursor) */
  "cursorCommandPath": string,
  /** VS Code Command Path - Full path to the code command (leave empty to use default: code) */
  "codeCommandPath": string,
  /** Trae Command Path - Full path to the trae command (leave empty to use default: trae) */
  "traeCommandPath": string,
  /** Ignored Folders Pattern - Regex pattern for folders to ignore during search (leave empty to use default) */
  "ignoredFoldersPattern": string
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `index` command */
  export type Index = ExtensionPreferences & {}
  /** Preferences accessible in the `open-cursor` command */
  export type OpenCursor = ExtensionPreferences & {}
  /** Preferences accessible in the `open-code` command */
  export type OpenCode = ExtensionPreferences & {}
  /** Preferences accessible in the `open-trae` command */
  export type OpenTrae = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `index` command */
  export type Index = {}
  /** Arguments passed to the `open-cursor` command */
  export type OpenCursor = {}
  /** Arguments passed to the `open-code` command */
  export type OpenCode = {}
  /** Arguments passed to the `open-trae` command */
  export type OpenTrae = {}
}

