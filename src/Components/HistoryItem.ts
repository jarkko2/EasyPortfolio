type HistoryItem = {
    title: string;
    year: string;
    description: string;
    dotimg: string;
}

function createHistoryItem(title: string, year: string, description: string, dotimg: string): HistoryItem {
    // You can add validation logic here if needed
    return {
        title,
        year,
        description,
        dotimg,
    };
}

export { HistoryItem, createHistoryItem };
