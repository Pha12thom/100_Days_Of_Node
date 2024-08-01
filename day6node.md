The `fs` (File System) module in Node.js allows you to interact with the file system in a way modeled on standard POSIX.

1. **Reading Files**:
    - `fs.readFile(path, options, callback)`: Asynchronously reads the entire contents of a file.
    - `fs.readFileSync(path, options)`: Synchronously reads the entire contents of a file.

2. **Writing Files**:
    - `fs.writeFile(file, data, options, callback)`: Asynchronously writes data to a file, replacing the file if it already exists.
    - `fs.writeFileSync(file, data, options)`: Synchronously writes data to a file, replacing the file if it already exists.
    - `fs.appendFile(path, data, options, callback)`: Asynchronously appends data to a file, creating the file if it does not exist.
    - `fs.appendFileSync(path, data, options)`: Synchronously appends data to a file, creating the file if it does not exist.

3. **Opening and Closing Files**:
    - `fs.open(path, flags, [mode], callback)`: Asynchronously opens a file.
    - `fs.openSync(path, flags, [mode])`: Synchronously opens a file.
    - `fs.close(fd, callback)`: Asynchronously closes a file descriptor.
    - `fs.closeSync(fd)`: Synchronously closes a file descriptor.

4. **Reading and Writing File Descriptors**:
    - `fs.read(fd, buffer, offset, length, position, callback)`: Reads from a file descriptor.
    - `fs.write(fd, buffer, offset, length, position, callback)`: Writes to a file descriptor.

5. **File Information**:
    - `fs.stat(path, callback)`: Asynchronously gets file status.
    - `fs.statSync(path)`: Synchronously gets file status.
    - `fs.fstat(fd, callback)`: Asynchronously gets the file status of a file descriptor.
    - `fs.fstatSync(fd)`: Synchronously gets the file status of a file descriptor.
    - `fs.lstat(path, callback)`: Asynchronously gets file status, but does not dereference symbolic links.
    - `fs.lstatSync(path)`: Synchronously gets file status, but does not dereference symbolic links.

6. **File and Directory Operations**:
    - `fs.rename(oldPath, newPath, callback)`: Asynchronously renames a file or directory.
    - `fs.renameSync(oldPath, newPath)`: Synchronously renames a file or directory.
    - `fs.unlink(path, callback)`: Asynchronously removes a file.
    - `fs.unlinkSync(path)`: Synchronously removes a file.
    - `fs.mkdir(path, options, callback)`: Asynchronously creates a directory.
    - `fs.mkdirSync(path, options)`: Synchronously creates a directory.
    - `fs.rmdir(path, callback)`: Asynchronously removes a directory.
    - `fs.rmdirSync(path)`: Synchronously removes a directory.
    - `fs.readdir(path, options, callback)`: Asynchronously reads the contents of a directory.
    - `fs.readdirSync(path, options)`: Synchronously reads the contents of a directory.

7. **Watching Files and Directories**:
    - `fs.watchFile(filename, options, listener)`: Watches for changes on `filename`.
    - `fs.unwatchFile(filename, listener)`: Stops watching for changes on `filename`.
    - `fs.watch(filename, options, listener)`: Watches for changes on `filename` or directory.

8. **File Streams**:
    - `fs.createReadStream(path, options)`: Creates a readable stream.
    - `fs.createWriteStream(path, options)`: Creates a writable stream.

