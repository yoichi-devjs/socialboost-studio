function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function generateDescriptions(input) {
    const userText = input.toLowerCase();

    /* TECH PRODUCTS */
    if (
        userText.includes("tech") ||
        userText.includes("keyboard") ||
        userText.includes("laptop") ||
        userText.includes("gaming")
    ) {

        const professional = [
            "Professional: Innovative tech product designed for modern performance.",

            "Professional: Advanced technology solution created for efficiency and speed.",

            "Professional: Smart digital product built to improve user experience."
        ];

        const sales = [
            "Sales: Upgrade your setup with powerful technology built for speed and results.",

            "Sales: Discover cutting-edge performance designed for modern creators.",

            "Sales: Built for precision, productivity, and digital lifestyles."
        ];

        const short = [
            "Short: Smart technology for modern users.",

            "Short: Powerful tools for digital performance.",

            "Short: Innovation meets performance."
        ];

        const social = [
            "Social: Upgrade your digital experience today.",

            "Social: Technology designed to power your workflow.",

            "Social: Built for creators, gamers, and modern businesses."
        ];

        return {
            professional: getRandomItem(professional),
            sales: getRandomItem(sales),
            short: getRandomItem(short),
            social: getRandomItem(social)
        };
    }
}