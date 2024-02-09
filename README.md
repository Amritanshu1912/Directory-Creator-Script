# Directory-Creator-Script

This simple JS script allows you to easily create directory structures based on a custom input format. It's a handy tool for generating folders and files quickly.

## Usage

1. **Installation**: Place the script in the root folder or follow these [steps](#steps) to run the script by simply typing the custom command (e.g., createDir) in the terminal.

2. **Input Format**: Specify the desired directory structure using a custom syntax.

   - Each entry is on a separate line, denoting either a file or a folder. Entries without extensions (e.g. - .js, .txt, .ts, .py, etc.) are considered folders. Use indents to indicate hierarchy.
   - Example:

   ```bash
    folder1
    folder2
      subfolder
        file1.js
        file2.js
    file1.txt
    file3.js
    :q
   ```

   Enter `:q` to exit the input.

3. **Run the Script**:

   - If reading from stdin:

   ```bash
   node script.js -t    #'t' stands for terminal
   ```

    Enter folder or file names, one per line, and press Enter to move to new line to type a new file/folder. When finished, type `:q` and press Enter.

   - If reading from a file:
     Create a text file (e.g., input.txt) in the root folder, paste your directory structure, and then run:

   ```bash
   node script.js input.txt
   ```

   The script will create the specified directories and files in the current working directory.

Examples -

To create a basic structure with folders and a file:

  ```bash
  folder1
    example.js
  folder2
    subfolder1
      example2.js
  file1.txt
  ```

## Steps to Create a Command <a id="steps"></a>

Here we are creating an alias for a command that allows us to execute the script without specifying its full path each time. This will also make it globally accessible as a command.

1. Move the Script:
   Move your script to /usr/local/bin for global command access, as this directory is in the system's PATH and commonly used for executable files and scripts.

   ```bash
   sudo mv /path/to/your/script.js /usr/local/bin/createDir
   ```

   Replace /path/to/your/script.js with the actual path to your script.

2. Set Permissions:
   Ensure that the script is executable:

   ```bash
   sudo chmod +x /usr/local/bin/createDir
   ```

3. Open your bashrc file:

   Open the .bashrc file in your home directory using a text editor. You can use nano, for example:

   ```bash
   nano ~/.bashrc
   ```

4. Add the alias:

   Add the following line at the end of the file:

   ```bash
   alias createDir='/usr/local/bin/createDir.'
   ```

5. Save and exit:

   Save the changes and exit the text editor. In nano, you can do this by pressing Ctrl + X, then Y to confirm, and finally Enter.

6. Apply changes:

   Run the following command to apply the changes:

   ```bash
   source ~/.bashrc
   ```

   Now you can use the command createDir to execute the script.

Example:

- From terminal

```bash
createDir -t
```

- From text file

```bash
createDir input.txt
```

Feel free to modify and adapt the script to suit your needs. Happy coding!
