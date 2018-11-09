let namePrefix = "";

export function generateMockData (directory = 3, files = 100) {
    const data = [];
    for (let categoryIndex = 0; categoryIndex < directory; categoryIndex++) {
        const category = {
            id: `${categoryIndex}`,
            name: `${namePrefix}category ${categoryIndex}`,
            open: false,
            items: []
        };
        for (let chanelIndex = 0; chanelIndex < files; chanelIndex++) {
            category.items.push({
                id: `${categoryIndex}-${chanelIndex}`,
                name: `${namePrefix}chanel ${categoryIndex}-${chanelIndex}`,
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