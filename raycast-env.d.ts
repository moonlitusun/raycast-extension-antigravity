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
  /** Ignored Folders Pattern - Regex pattern for folders to ignore during search (leave empty to use default) */
  "ignoredFoldersPattern": string
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `index` command */
  export type Index = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `index` command */
  export type Index = {}
}

