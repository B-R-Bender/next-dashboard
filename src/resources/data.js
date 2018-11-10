let namePrefix = "";

export function generateMockData (directory = 3, files = 100) {
    const data = [];
    for (let categoryIndex = 0; categoryIndex < directory; categoryIndex++) {
        const category = {
            id: `${categoryIndex}`,
            name: `${namePrefix}category ${categoryIndex}`,
            channels: []
        };
        for (let channelIndex = 0; channelIndex < files; channelIndex++) {
            category.channels.push({
                id: `${categoryIndex}-${channelIndex}`,
                name: `${namePrefix}channel ${categoryIndex}-${channelIndex}`,
                selected: false,
                path: [categoryIndex, "channels", channelIndex]
            });
        }
        data.push(category)
    }
    return data;
}

export function generateMockDataWithPrefix (prefix, directory = 3, files = 100) {
    namePrefix = prefix;
    const mockData = generateMockData(directory, files);
    namePrefix = "";
    return mockData;
}