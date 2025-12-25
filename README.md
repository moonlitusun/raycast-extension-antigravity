# Antigravity Search

A Raycast extension for quickly searching and opening projects in your code directory with Antigravity IDE.

[![raycast-cross-extension-badge]][raycast-cross-extension-link]

https://github.com/user-attachments/assets/fd265a58-3540-40f4-92c8-cd39a7542fbd

*Tip:If you can't see the video, you can click right button and select "Open video in new tab" to see it.*

## ✨ Features

- 🔍 **Smart Search** - Fast fuzzy search through all your project folders
- 🚀 **Quick Open** - Launch projects in Antigravity(Cursor/VSCode/Neovim/Or any other IDE) with a single keystroke
- 📁 **Folder Hierarchy** - View project paths and folder structure at a glance
- ⏰ **Last Modified** - See when each project was last updated
- 🎯 **Configurable Depth** - Control how deep to search (1-5 levels)
- 🚫 **Smart Filtering** - Automatically excludes build folders and dependencies
- ⚙️ **Flexible Config** - Customize search patterns, paths, and behavior
- 🎨 **Native UI** - Seamless integration with Raycast's interface

## 🚀 Quick Start

### Prerequisites

- [Raycast](https://raycast.com/) installed
- [Antigravity IDE](https://antigravity.dev/) installed
- `agy` command available (usually at `~/.antigravity/antigravity/bin/agy`)

### Installation

1. Install this extension in Raycast
2. Open Raycast preferences → Extensions → Antigravity Search
3. Configure your projects directory (default: `~/Code`)
4. Start searching!

## 📖 Usage

### Basic Search

1. Open Raycast (`⌘ + Space` or your custom hotkey)
2. Type "Search Antigravity Projects" or set a custom alias
3. Start typing to filter your projects
4. Press `Enter` to open the selected project

**Tip:** You can set a custom alias for the command in Raycast preferences.

### Available Actions

| Action                | Shortcut    | Description                               |
| --------------------- | ----------- | ----------------------------------------- |
| Open with Antigravity | `Enter`     | Opens the project in Antigravity IDE      |
| Show in Finder        | `⌘ + Enter` | Opens the project folder in Finder        |
| Copy Path             | `⌘ + C`     | Copies the full project path to clipboard |

## ⚙️ Configuration

Access preferences through: Raycast → Extensions → Antigravity Search → Preferences

### Projects Directory

**Default:** `~/Code`

The root directory where your projects are located. The extension will search within this directory.

**Examples:**

- `~/Code` - Your home code directory
- `~/Documents/Projects` - Custom projects folder
- `/Users/username/workspace` - Absolute path

### Search Depth

**Default:** `3`  
**Range:** 1-5

How many folder levels deep to search. Higher values find more projects but take longer.

**Examples:**
- `1` - Only direct children of projects directory
- `3` - Search up to 3 levels deep (recommended)
- `5` - Maximum depth for deeply nested projects

### Antigravity Command Path

**Default:** `~/.antigravity/antigravity/bin/agy`

The full path to the Antigravity IDE command-line executable. This extension uses this command to open your projects in Antigravity IDE.

#### 🔍 How to Find Your Command Path

If you're not sure where your `agy` command is located, try these methods:

**Method 1: Using `which` command**

```bash
which agy
```

This will show the path if `agy` is in your system PATH. Common output:

- `/usr/local/bin/agy`
- `/opt/homebrew/bin/agy`
- `~/.antigravity/antigravity/bin/agy`

**Method 2: Using `find` command**

```bash
find ~ -name "agy" -type f 2>/dev/null
```

This searches your home directory for the `agy` executable.

**Method 3: Check Antigravity installation directory**

```bash
ls -la ~/.antigravity/antigravity/bin/agy
```

#### 📍 Common Installation Locations

| Installation Method      | Typical Path                         |
|--------------------------|--------------------------------------|
| Official installer       | `~/.antigravity/antigravity/bin/agy` |
| Homebrew (Intel)         | `/usr/local/bin/agy`                 |
| Homebrew (Apple Silicon) | `/opt/homebrew/bin/agy`              |
| Manual installation      | `/usr/local/bin/agy`                 |
| Custom location          | Wherever you installed it            |

#### ⚙️ Configuration Examples

**Using default location:**

```text
~/.antigravity/antigravity/bin/agy
```

**Using Homebrew installation:**

```text
/usr/local/bin/agy
```

**Using custom installation:**

```text
/Users/username/Applications/Antigravity/agy
```

#### ⚠️ Important Notes

- **Use absolute paths**: Always provide the full path (e.g., `/usr/local/bin/agy` or `~/.antigravity/antigravity/bin/agy`)
- **Tilde expansion**: The `~` symbol is supported and will expand to your home directory
- **No quotes needed**: Don't wrap the path in quotes in the preferences field
- **Verify the path**: Make sure the file exists and is executable before saving

#### 🔧 Troubleshooting Command Path

**Error: "Command not found" or "Failed to open with Antigravity"**

1. **Verify the file exists:**

   ```bash
   ls -la ~/.antigravity/antigravity/bin/agy
   ```

2. **Check if it's executable:**

   ```bash
   chmod +x ~/.antigravity/antigravity/bin/agy
   ```

3. **Test the command manually:**

   ```bash
   ~/.antigravity/antigravity/bin/agy -n ~/Code/my-project
   ```

4. **Check for typos:** Make sure there are no extra spaces or characters in the path

**For other IDE commands:**

This extension can work with other IDEs by changing the command path:

- **Cursor:** `/usr/local/bin/cursor` or `/Applications/Cursor.app/Contents/Resources/app/bin/cursor`
- **VSCode:** `/usr/local/bin/code` or `/Applications/Visual Studio Code.app/Contents/Resources/app/bin/code`
- **Neovim:** `/usr/local/bin/nvim`

Just make sure the command supports the `-n` flag for opening a new window with a directory.

### Ignored Folders Pattern

**Default:** `^\.|^(node_modules|venv|__pycache__|target|dist|build|vendor|bower_components)$`

Regular expression pattern for folders to exclude from search results.

**Default pattern ignores:**

- Hidden folders (starting with `.`)
- `node_modules` - Node.js dependencies
- `venv` - Python virtual environments
- `__pycache__` - Python cache
- `target` - Rust/Java build output
- `dist` - Distribution/build folders
- `build` - Build artifacts
- `vendor` - Dependency folders
- `bower_components` - Bower dependencies

**Custom pattern examples:**

Ignore only hidden folders and node_modules:

```regex
^\.|^node_modules$
```

Ignore additional folders:

```regex
^\.|^(node_modules|venv|temp|cache|logs)$
```

Ignore nothing (search all folders):

```regex
^$
```

## 🔧 Advanced Configuration

### Environment Variables

You can also configure the extension using environment variables:

```bash
export ANTIGRAVITY_PROJECTS_DIR="~/Code"
export ANTIGRAVITY_AGY_PATH="/usr/local/bin/agy"
export ANTIGRAVITY_IGNORED_FOLDERS_PATTERN="^\.|^node_modules$"
```

**Priority order:**
1. Raycast preferences (highest)
2. Environment variables
3. Default values (lowest)

### .env File Support

Create a `.env` file in the extension directory for persistent configuration:

```env
ANTIGRAVITY_PROJECTS_DIR=/Users/username/Code
ANTIGRAVITY_AGY_PATH=/usr/local/bin/agy
ANTIGRAVITY_IGNORED_FOLDERS_PATTERN=^\.|^node_modules$
```

## 🐛 Troubleshooting

### No projects found

**Check:**
- Projects directory path is correct in preferences
- Search depth is sufficient to reach your projects
- Projects aren't being filtered by the ignored folders pattern

### Can't open projects

**Check:**
- Antigravity IDE is installed
- `agy` command path is correct
- Try running `agy` in terminal to verify it works

### Search is slow

**Solutions:**
- Reduce search depth in preferences
- Add more folders to the ignored pattern
- Use a more specific projects directory

### Invalid regex pattern error

**Check:**
- Your custom ignored folders pattern is valid regex
- Special characters are properly escaped
- Test your pattern at [regex101.com](https://regex101.com/)

## 💻 Development

### Setup

```bash
npm install
npm run dev
```

### Build

```bash
npm run build
```

### Lint

```bash
npm run lint
npm run fix-lint
```

### Project Structure

```
src/
├── index.tsx      # Main command component
├── config.ts      # Configuration and preferences
├── utils.ts       # Utility functions (search, open)
└── types.ts       # TypeScript type definitions
```

## 📝 License

MIT

## 🙏 Acknowledgments

- Built for [Raycast](https://raycast.com/)
- Designed for [Antigravity IDE](https://antigravity.dev/)

---

**Enjoy coding with Antigravity! 🚀**
