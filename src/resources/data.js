let namePrefix = "";

export function generateMockData (directory = 3, files = 100) {
    const data = [];
    for (let directoryIndex = 0; directoryIndex < directory; directoryIndex++) {
        const directory = {
            id: `${directoryIndex}`,
            name: `${namePrefix}dir ${directoryIndex}`,
            directory: true,
            open: false,
            children: []
        };
        for (let fileIndex = 0; fileIndex < files; fileIndex++) {
            directory.children.push({
                id: `${directoryIndex}-${fileIndex}`,
                name: `${namePrefix}file ${directoryIndex}-${fileIndex}`,
                directory: false,
                open: false,
                children: null
            });
        }
        data.push(directory)
    }
    return data;
}

export function generateMockDataWithPrefix (prefix, directory = 3, files = 100) {
    namePrefix = prefix;
    const mockData = generateMockData(directory, files);
    namePrefix = "";
    return mockData;
}