const { Telegraf } = require('telegraf');
const NodeCache = require('node-cache');

const appCache = new NodeCache({ stdTTL: 600 });

// Create the bot
const BOT_TOKEN = '8030918018:AAFtuTbF8zXRDx3uRw5CBBGh7q7ai4Zb28I';
const bot = new Telegraf(BOT_TOKEN);

// [Your periodicTable and allElements declarations here — unchanged from your file]
// Periodic table data organized by groups (columns) and periods (rows)
const periodicTable = {
    // Period 1
    1: [
        { number: 1, symbol: 'H', name: 'Hydrogen', atomic_mass: 1.008, category: 'diatomic nonmetal', group: 1, period: 1 },
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        { number: 2, symbol: 'He', name: 'Helium', atomic_mass: 4.0026, category: 'noble gas', group: 18, period: 1 }
    ],
    
    // Period 2
    2: [
        { number: 3, symbol: 'Li', name: 'Lithium', atomic_mass: 6.94, category: 'alkali metal', group: 1, period: 2 },
        { number: 4, symbol: 'Be', name: 'Beryllium', atomic_mass: 9.0122, category: 'alkaline earth metal', group: 2, period: 2 },
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        { number: 5, symbol: 'B', name: 'Boron', atomic_mass: 10.81, category: 'metalloid', group: 13, period: 2 },
        { number: 6, symbol: 'C', name: 'Carbon', atomic_mass: 12.011, category: 'polyatomic nonmetal', group: 14, period: 2 },
        { number: 7, symbol: 'N', name: 'Nitrogen', atomic_mass: 14.007, category: 'diatomic nonmetal', group: 15, period: 2 },
        { number: 8, symbol: 'O', name: 'Oxygen', atomic_mass: 15.999, category: 'diatomic nonmetal', group: 16, period: 2 },
        { number: 9, symbol: 'F', name: 'Fluorine', atomic_mass: 18.998, category: 'diatomic nonmetal', group: 17, period: 2 },
        { number: 10, symbol: 'Ne', name: 'Neon', atomic_mass: 20.180, category: 'noble gas', group: 18, period: 2 }
    ],
    
    // Period 3
    3: [
        { number: 11, symbol: 'Na', name: 'Sodium', atomic_mass: 22.990, category: 'alkali metal', group: 1, period: 3 },
        { number: 12, symbol: 'Mg', name: 'Magnesium', atomic_mass: 24.305, category: 'alkaline earth metal', group: 2, period: 3 },
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        { number: 13, symbol: 'Al', name: 'Aluminium', atomic_mass: 26.982, category: 'post-transition metal', group: 13, period: 3 },
        { number: 14, symbol: 'Si', name: 'Silicon', atomic_mass: 28.085, category: 'metalloid', group: 14, period: 3 },
        { number: 15, symbol: 'P', name: 'Phosphorus', atomic_mass: 30.974, category: 'polyatomic nonmetal', group: 15, period: 3 },
        { number: 16, symbol: 'S', name: 'Sulfur', atomic_mass: 32.06, category: 'polyatomic nonmetal', group: 16, period: 3 },
        { number: 17, symbol: 'Cl', name: 'Chlorine', atomic_mass: 35.45, category: 'diatomic nonmetal', group: 17, period: 3 },
        { number: 18, symbol: 'Ar', name: 'Argon', atomic_mass: 39.948, category: 'noble gas', group: 18, period: 3 }
    ],
    
    // Period 4
    4: [
        { number: 19, symbol: 'K', name: 'Potassium', atomic_mass: 39.098, category: 'alkali metal', group: 1, period: 4 },
        { number: 20, symbol: 'Ca', name: 'Calcium', atomic_mass: 40.078, category: 'alkaline earth metal', group: 2, period: 4 },
        { number: 21, symbol: 'Sc', name: 'Scandium', atomic_mass: 44.956, category: 'transition metal', group: 3, period: 4 },
        { number: 22, symbol: 'Ti', name: 'Titanium', atomic_mass: 47.867, category: 'transition metal', group: 4, period: 4 },
        { number: 23, symbol: 'V', name: 'Vanadium', atomic_mass: 50.942, category: 'transition metal', group: 5, period: 4 },
        { number: 24, symbol: 'Cr', name: 'Chromium', atomic_mass: 51.996, category: 'transition metal', group: 6, period: 4 },
        { number: 25, symbol: 'Mn', name: 'Manganese', atomic_mass: 54.938, category: 'transition metal', group: 7, period: 4 },
        { number: 26, symbol: 'Fe', name: 'Iron', atomic_mass: 55.845, category: 'transition metal', group: 8, period: 4 },
        { number: 27, symbol: 'Co', name: 'Cobalt', atomic_mass: 58.933, category: 'transition metal', group: 9, period: 4 },
        { number: 28, symbol: 'Ni', name: 'Nickel', atomic_mass: 58.693, category: 'transition metal', group: 10, period: 4 },
        { number: 29, symbol: 'Cu', name: 'Copper', atomic_mass: 63.546, category: 'transition metal', group: 11, period: 4 },
        { number: 30, symbol: 'Zn', name: 'Zinc', atomic_mass: 65.38, category: 'transition metal', group: 12, period: 4 },
        { number: 31, symbol: 'Ga', name: 'Gallium', atomic_mass: 69.723, category: 'post-transition metal', group: 13, period: 4 },
        { number: 32, symbol: 'Ge', name: 'Germanium', atomic_mass: 72.630, category: 'metalloid', group: 14, period: 4 },
        { number: 33, symbol: 'As', name: 'Arsenic', atomic_mass: 74.922, category: 'metalloid', group: 15, period: 4 },
        { number: 34, symbol: 'Se', name: 'Selenium', atomic_mass: 78.971, category: 'polyatomic nonmetal', group: 16, period: 4 },
        { number: 35, symbol: 'Br', name: 'Bromine', atomic_mass: 79.904, category: 'diatomic nonmetal', group: 17, period: 4 },
        { number: 36, symbol: 'Kr', name: 'Krypton', atomic_mass: 83.798, category: 'noble gas', group: 18, period: 4 }
    ],
    
    // Period 5
    5: [
        { number: 37, symbol: 'Rb', name: 'Rubidium', atomic_mass: 85.468, category: 'alkali metal', group: 1, period: 5 },
        { number: 38, symbol: 'Sr', name: 'Strontium', atomic_mass: 87.62, category: 'alkaline earth metal', group: 2, period: 5 },
        { number: 39, symbol: 'Y', name: 'Yttrium', atomic_mass: 88.906, category: 'transition metal', group: 3, period: 5 },
        { number: 40, symbol: 'Zr', name: 'Zirconium', atomic_mass: 91.224, category: 'transition metal', group: 4, period: 5 },
        { number: 41, symbol: 'Nb', name: 'Niobium', atomic_mass: 92.906, category: 'transition metal', group: 5, period: 5 },
        { number: 42, symbol: 'Mo', name: 'Molybdenum', atomic_mass: 95.95, category: 'transition metal', group: 6, period: 5 },
        { number: 43, symbol: 'Tc', name: 'Technetium', atomic_mass: 98, category: 'transition metal', group: 7, period: 5 },
        { number: 44, symbol: 'Ru', name: 'Ruthenium', atomic_mass: 101.07, category: 'transition metal', group: 8, period: 5 },
        { number: 45, symbol: 'Rh', name: 'Rhodium', atomic_mass: 102.91, category: 'transition metal', group: 9, period: 5 },
        { number: 46, symbol: 'Pd', name: 'Palladium', atomic_mass: 106.42, category: 'transition metal', group: 10, period: 5 },
        { number: 47, symbol: 'Ag', name: 'Silver', atomic_mass: 107.87, category: 'transition metal', group: 11, period: 5 },
        { number: 48, symbol: 'Cd', name: 'Cadmium', atomic_mass: 112.41, category: 'transition metal', group: 12, period: 5 },
        { number: 49, symbol: 'In', name: 'Indium', atomic_mass: 114.82, category: 'post-transition metal', group: 13, period: 5 },
        { number: 50, symbol: 'Sn', name: 'Tin', atomic_mass: 118.71, category: 'post-transition metal', group: 14, period: 5 },
        { number: 51, symbol: 'Sb', name: 'Antimony', atomic_mass: 121.76, category: 'metalloid', group: 15, period: 5 },
        { number: 52, symbol: 'Te', name: 'Tellurium', atomic_mass: 127.60, category: 'metalloid', group: 16, period: 5 },
        { number: 53, symbol: 'I', name: 'Iodine', atomic_mass: 126.90, category: 'diatomic nonmetal', group: 17, period: 5 },
        { number: 54, symbol: 'Xe', name: 'Xenon', atomic_mass: 131.29, category: 'noble gas', group: 18, period: 5 }
    ],
    
    // Period 6
    6: [
        { number: 55, symbol: 'Cs', name: 'Caesium', atomic_mass: 132.91, category: 'alkali metal', group: 1, period: 6 },
        { number: 56, symbol: 'Ba', name: 'Barium', atomic_mass: 137.33, category: 'alkaline earth metal', group: 2, period: 6 },
        // Lanthanides (placeholder)
        { number: 72, symbol: 'Hf', name: 'Hafnium', atomic_mass: 178.49, category: 'transition metal', group: 4, period: 6 },
        { number: 73, symbol: 'Ta', name: 'Tantalum', atomic_mass: 180.95, category: 'transition metal', group: 5, period: 6 },
        { number: 74, symbol: 'W', name: 'Tungsten', atomic_mass: 183.84, category: 'transition metal', group: 6, period: 6 },
        { number: 75, symbol: 'Re', name: 'Rhenium', atomic_mass: 186.21, category: 'transition metal', group: 7, period: 6 },
        { number: 76, symbol: 'Os', name: 'Osmium', atomic_mass: 190.23, category: 'transition metal', group: 8, period: 6 },
        { number: 77, symbol: 'Ir', name: 'Iridium', atomic_mass: 192.22, category: 'transition metal', group: 9, period: 6 },
        { number: 78, symbol: 'Pt', name: 'Platinum', atomic_mass: 195.08, category: 'transition metal', group: 10, period: 6 },
        { number: 79, symbol: 'Au', name: 'Gold', atomic_mass: 196.97, category: 'transition metal', group: 11, period: 6 },
        { number: 80, symbol: 'Hg', name: 'Mercury', atomic_mass: 200.59, category: 'transition metal', group: 12, period: 6 },
        { number: 81, symbol: 'Tl', name: 'Thallium', atomic_mass: 204.38, category: 'post-transition metal', group: 13, period: 6 },
        { number: 82, symbol: 'Pb', name: 'Lead', atomic_mass: 207.2, category: 'post-transition metal', group: 14, period: 6 },
        { number: 83, symbol: 'Bi', name: 'Bismuth', atomic_mass: 208.98, category: 'post-transition metal', group: 15, period: 6 },
        { number: 84, symbol: 'Po', name: 'Polonium', atomic_mass: 209, category: 'post-transition metal', group: 16, period: 6 },
        { number: 85, symbol: 'At', name: 'Astatine', atomic_mass: 210, category: 'metalloid', group: 17, period: 6 },
        { number: 86, symbol: 'Rn', name: 'Radon', atomic_mass: 222, category: 'noble gas', group: 18, period: 6 }
    ],
    
    // Period 7
    7: [
        { number: 87, symbol: 'Fr', name: 'Francium', atomic_mass: 223, category: 'alkali metal', group: 1, period: 7 },
        { number: 88, symbol: 'Ra', name: 'Radium', atomic_mass: 226, category: 'alkaline earth metal', group: 2, period: 7 },
        // Actinides (placeholder)
        { number: 104, symbol: 'Rf', name: 'Rutherfordium', atomic_mass: 267, category: 'transition metal', group: 4, period: 7 },
        { number: 105, symbol: 'Db', name: 'Dubnium', atomic_mass: 268, category: 'transition metal', group: 5, period: 7 },
        { number: 106, symbol: 'Sg', name: 'Seaborgium', atomic_mass: 269, category: 'transition metal', group: 6, period: 7 },
        { number: 107, symbol: 'Bh', name: 'Bohrium', atomic_mass: 270, category: 'transition metal', group: 7, period: 7 },
        { number: 108, symbol: 'Hs', name: 'Hassium', atomic_mass: 277, category: 'transition metal', group: 8, period: 7 },
        { number: 109, symbol: 'Mt', name: 'Meitnerium', atomic_mass: 278, category: 'transition metal', group: 9, period: 7 },
        { number: 110, symbol: 'Ds', name: 'Darmstadtium', atomic_mass: 281, category: 'transition metal', group: 10, period: 7 },
        { number: 111, symbol: 'Rg', name: 'Roentgenium', atomic_mass: 282, category: 'transition metal', group: 11, period: 7 },
        { number: 112, symbol: 'Cn', name: 'Copernicium', atomic_mass: 285, category: 'transition metal', group: 12, period: 7 },
        { number: 113, symbol: 'Nh', name: 'Nihonium', atomic_mass: 286, category: 'post-transition metal', group: 13, period: 7 },
        { number: 114, symbol: 'Fl', name: 'Flerovium', atomic_mass: 289, category: 'post-transition metal', group: 14, period: 7 },
        { number: 115, symbol: 'Mc', name: 'Moscovium', atomic_mass: 290, category: 'post-transition metal', group: 15, period: 7 },
        { number: 116, symbol: 'Lv', name: 'Livermorium', atomic_mass: 293, category: 'post-transition metal', group: 16, period: 7 },
        { number: 117, symbol: 'Ts', name: 'Tennessine', atomic_mass: 294, category: 'unknown', group: 17, period: 7 },
        { number: 118, symbol: 'Og', name: 'Oganesson', atomic_mass: 294, category: 'unknown', group: 18, period: 7 }
    ],
    
    // Lanthanides (separate row)
    lanthanides: [
        { number: 57, symbol: 'La', name: 'Lanthanum', atomic_mass: 138.91, category: 'lanthanide', group: 3, period: 'lanthanide' },
        { number: 58, symbol: 'Ce', name: 'Cerium', atomic_mass: 140.12, category: 'lanthanide', group: null, period: 'lanthanide' },
        { number: 59, symbol: 'Pr', name: 'Praseodymium', atomic_mass: 140.91, category: 'lanthanide', group: null, period: 'lanthanide' },
        { number: 60, symbol: 'Nd', name: 'Neodymium', atomic_mass: 144.24, category: 'lanthanide', group: null, period: 'lanthanide' },
        { number: 61, symbol: 'Pm', name: 'Promethium', atomic_mass: 145, category: 'lanthanide', group: null, period: 'lanthanide' },
        { number: 62, symbol: 'Sm', name: 'Samarium', atomic_mass: 150.36, category: 'lanthanide', group: null, period: 'lanthanide' },
        { number: 63, symbol: 'Eu', name: 'Europium', atomic_mass: 151.96, category: 'lanthanide', group: null, period: 'lanthanide' },
        { number: 64, symbol: 'Gd', name: 'Gadolinium', atomic_mass: 157.25, category: 'lanthanide', group: null, period: 'lanthanide' },
        { number: 65, symbol: 'Tb', name: 'Terbium', atomic_mass: 158.93, category: 'lanthanide', group: null, period: 'lanthanide' },
        { number: 66, symbol: 'Dy', name: 'Dysprosium', atomic_mass: 162.50, category: 'lanthanide', group: null, period: 'lanthanide' },
        { number: 67, symbol: 'Ho', name: 'Holmium', atomic_mass: 164.93, category: 'lanthanide', group: null, period: 'lanthanide' },
        { number: 68, symbol: 'Er', name: 'Erbium', atomic_mass: 167.26, category: 'lanthanide', group: null, period: 'lanthanide' },
        { number: 69, symbol: 'Tm', name: 'Thulium', atomic_mass: 168.93, category: 'lanthanide', group: null, period: 'lanthanide' },
        { number: 70, symbol: 'Yb', name: 'Ytterbium', atomic_mass: 173.05, category: 'lanthanide', group: null, period: 'lanthanide' },
        { number: 71, symbol: 'Lu', name: 'Lutetium', atomic_mass: 174.97, category: 'lanthanide', group: 3, period: 'lanthanide' }
    ],
    
    // Actinides (separate row)
    actinides: [
        { number: 89, symbol: 'Ac', name: 'Actinium', atomic_mass: 227, category: 'actinide', group: 3, period: 'actinide' },
        { number: 90, symbol: 'Th', name: 'Thorium', atomic_mass: 232.04, category: 'actinide', group: null, period: 'actinide' },
        { number: 91, symbol: 'Pa', name: 'Protactinium', atomic_mass: 231.04, category: 'actinide', group: null, period: 'actinide' },
        { number: 92, symbol: 'U', name: 'Uranium', atomic_mass: 238.03, category: 'actinide', group: null, period: 'actinide' },
        { number: 93, symbol: 'Np', name: 'Neptunium', atomic_mass: 237, category: 'actinide', group: null, period: 'actinide' },
        { number: 94, symbol: 'Pu', name: 'Plutonium', atomic_mass: 244, category: 'actinide', group: null, period: 'actinide' },
        { number: 95, symbol: 'Am', name: 'Americium', atomic_mass: 243, category: 'actinide', group: null, period: 'actinide' },
        { number: 96, symbol: 'Cm', name: 'Curium', atomic_mass: 247, category: 'actinide', group: null, period: 'actinide' },
        { number: 97, symbol: 'Bk', name: 'Berkelium', atomic_mass: 247, category: 'actinide', group: null, period: 'actinide' },
        { number: 98, symbol: 'Cf', name: 'Californium', atomic_mass: 251, category: 'actinide', group: null, period: 'actinide' },
        { number: 99, symbol: 'Es', name: 'Einsteinium', atomic_mass: 252, category: 'actinide', group: null, period: 'actinide' },
        { number: 100, symbol: 'Fm', name: 'Fermium', atomic_mass: 257, category: 'actinide', group: null, period: 'actinide' },
        { number: 101, symbol: 'Md', name: 'Mendelevium', atomic_mass: 258, category: 'actinide', group: null, period: 'actinide' },
        { number: 102, symbol: 'No', name: 'Nobelium', atomic_mass: 259, category: 'actinide', group: null, period: 'actinide' },
        { number: 103, symbol: 'Lr', name: 'Lawrencium', atomic_mass: 266, category: 'actinide', group: 3, period: 'actinide' }
    ]
};

const allElements = [];
for (const period in periodicTable) {
    if (periodicTable[period] && Array.isArray(periodicTable[period])) {
        periodicTable[period].forEach(element => {
            if (element) allElements.push(element);
        });
    }
}

// Add lanthanides and actinides
allElements.push(...periodicTable.lanthanides);
allElements.push(...periodicTable.actinides);

// Start command
// Start command
bot.start((ctx) => {
    const welcomeMessage = `👋 بەخێربێیت بۆ بۆتی خشتەی پێڕیۆدیک!\n\n` +
        `دەتوانی بە گەڕان بگەیتە ئەلیکترۆنەکان بە:\n` +
        `- ناو (وەک "Hydrogen")\n` +
        `- نیشانی کیمیاوی (وەک "H")\n` +
        `- ژمارەی ئەتۆمی (وەک "1")\n\n` +
        `بەکاربهێنە /table بۆ بینینی شێوازی خشتەکە یان /help بۆ فەرمانەکانی تر.`;
    ctx.reply(welcomeMessage);
});

// Help command
bot.help((ctx) => {
    const helpMessage = `📚 فەرمانە بەردەستەکان:\n\n` +
        `/start - پەیامی بەخێربێیت\n` +
        `/help - نیشاندانی ئەم یارمەتیدەرە\n` +
        `/table - پیشاندانی شێوازی خشتەی پێڕیۆدیک\n` +
        `/element [ناو/نیشان/ژمارە] - زانیاری لەسەر ئەلیکترۆنەکە\n` +
        `/group [ژمارەی گروپ] - لیستی ئەلیکترۆنەکانی گروپەکە (1-18)\n` +
        `/period [ژمارەی مەودا] - لیستی ئەلیکترۆنەکان لە مەودایەکدا (1-7)\n` +
        `/category [هاوپۆل] - لیستی ئەلیکترۆنەکان بەپێی هاوپۆل\n` +
        `/search [گەڕان] - گەڕان بە ناو یان نیشانی کیمیاوی\n\n` +
        `دەتوانیت بەسادەیی ناو، نیشان، یان ژمارە بنووسیت بۆ وەرگرتنی زانیاری.`;
    ctx.reply(helpMessage);
});


// Util functions
const getElementInfo = (element) => {
    return `🔬 *${element.name} (${element.symbol})* - #${element.number}\n\n` +
        `*Atomic Mass:* ${element.atomic_mass}\n` +
        `*Category:* ${element.category}\n` +
        `*Group:* ${element.group || 'N/A'}\n` +
        `*Period:* ${element.period}\n\n` +
        `[Learn more on Wikipedia](https://en.wikipedia.org/wiki/${element.name})`;
};

const findElement = (query) => {
    if (!isNaN(query)) {
        const num = parseInt(query);
        return allElements.find(e => e.number === num);
    }
    const bySymbol = allElements.find(e => e.symbol.toLowerCase() === query.toLowerCase());
    if (bySymbol) return bySymbol;
    return allElements.find(e => e.name.toLowerCase().includes(query.toLowerCase()));
};

// Commands
bot.command('element', (ctx) => {
    const query = ctx.message.text.split(' ').slice(1).join(' ');
    if (!query) {
        ctx.reply('Please specify an element name, symbol, or atomic number. Example: /element Hydrogen');
        return;
    }
    const element = findElement(query);
    if (element) {
        ctx.replyWithMarkdown(getElementInfo(element));
    } else {
        ctx.reply(`Element "${query}" not found. Try searching by name, symbol, or atomic number.`);
    }
});

bot.command('group', (ctx) => {
    const groupNum = parseInt(ctx.message.text.split(' ')[1]);
    if (isNaN(groupNum) || groupNum < 1 || groupNum > 18) {
        ctx.reply('Please specify a valid group number between 1 and 18. Example: /group 1');
        return;
    }
    const elementsInGroup = allElements.filter(e => e.group === groupNum);
    if (elementsInGroup.length === 0) {
        ctx.reply(`No elements found in group ${groupNum}.`);
        return;
    }
    let message = `📊 *Elements in Group ${groupNum}:*\n\n`;
    elementsInGroup.forEach(e => {
        message += `• ${e.name} (${e.symbol}) - #${e.number}\n`;
    });
    ctx.replyWithMarkdown(message);
});

bot.command('period', (ctx) => {
    const periodNum = parseInt(ctx.message.text.split(' ')[1]);
    if (isNaN(periodNum)) {
        ctx.reply('Please specify a valid period number between 1 and 7. Example: /period 1');
        return;
    }

    if (periodNum < 1 || periodNum > 7) {
        ctx.reply('Period number must be between 1 and 7.');
        return;
    }

    if (periodNum === 6) {
        const period6Elements = periodicTable[6].filter(e => e);
        const lanthanides = periodicTable.lanthanides;
        let message = `📊 *Elements in Period 6:*\n\n`;
        period6Elements.forEach(e => {
            message += `• ${e.name} (${e.symbol}) - #${e.number}\n`;
        });
        message += `\n*Lanthanides:*\n`;
        lanthanides.forEach(e => {
            message += `• ${e.name} (${e.symbol}) - #${e.number}\n`;
        });
        ctx.replyWithMarkdown(message);
        return;
    }

    if (periodNum === 7) {
        const period7Elements = periodicTable[7].filter(e => e);
        const actinides = periodicTable.actinides;
        let message = `📊 *Elements in Period 7:*\n\n`;
        period7Elements.forEach(e => {
            message += `• ${e.name} (${e.symbol}) - #${e.number}\n`;
        });
        message += `\n*Actinides:*\n`;
        actinides.forEach(e => {
            message += `• ${e.name} (${e.symbol}) - #${e.number}\n`;
        });
        ctx.replyWithMarkdown(message);
        return;
    }

    const elementsInPeriod = periodicTable[periodNum].filter(e => e);
    if (elementsInPeriod.length === 0) {
        ctx.reply(`No elements found in period ${periodNum}.`);
        return;
    }

    let message = `📊 *Elements in Period ${periodNum}:*\n\n`;
    elementsInPeriod.forEach(e => {
        message += `• ${e.name} (${e.symbol}) - #${e.number}\n`;
    });
    ctx.replyWithMarkdown(message);
});

bot.command('category', (ctx) => {
    const category = ctx.message.text.split(' ').slice(1).join(' ');
    if (!category) {
        ctx.reply('Please specify a category. Example: /category metalloid');
        return;
    }
    const elementsInCategory = allElements.filter(e => 
        e.category.toLowerCase().includes(category.toLowerCase()));
    if (elementsInCategory.length === 0) {
        ctx.reply(`No elements found in category "${category}".`);
        return;
    }
    let message = `📊 *Elements in Category "${category}":*\n\n`;
    elementsInCategory.forEach(e => {
        message += `• ${e.name} (${e.symbol}) - #${e.number}\n`;
    });
    ctx.replyWithMarkdown(message);
});

bot.command('search', (ctx) => {
    const query = ctx.message.text.split(' ').slice(1).join(' ');
    if (!query) {
        ctx.reply('Please specify a search query. Example: /search gold');
        return;
    }
    const results = allElements.filter(e => 
        e.name.toLowerCase().includes(query.toLowerCase()) || 
        e.symbol.toLowerCase().includes(query.toLowerCase()));
    if (results.length === 0) {
        ctx.reply(`No elements found matching "${query}".`);
        return;
    }
    let message = `🔍 *Search Results for "${query}":*\n\n`;
    results.forEach(e => {
        message += `• ${e.name} (${e.symbol}) - #${e.number}\n`;
    });
    if (results.length === 1) {
        message += `\n${getElementInfo(results[0])}`;
    } else if (results.length > 10) {
        message += `\n${results.length} elements found. Please refine your search.`;
    }
    ctx.replyWithMarkdown(message);
});

bot.command('table', (ctx) => {
    const tableMessage = `📜 *Periodic Table Layout*\n\n` +
        `The periodic table is organized into:\n\n` +
        `*Groups (Columns):* 1-18\n` +
        `*Periods (Rows):* 1-7\n\n` +
        `Special series:\n` +
        `- *Lanthanides:* Elements 57-71\n` +
        `- *Actinides:* Elements 89-103\n\n` +
        `Use /group or /period to explore specific sections.`;
    ctx.replyWithMarkdown(tableMessage);
});

bot.on('inline_query', (ctx) => {
    const query = ctx.inlineQuery.query;
    if (!query) return;
    const results = [];
    const elements = allElements.filter(e => 
        e.name.toLowerCase().includes(query.toLowerCase()) || 
        e.symbol.toLowerCase().includes(query.toLowerCase()) ||
        e.number.toString().includes(query));
    elements.slice(0, 10).forEach(element => {
        results.push({
            type: 'article',
            id: element.number.toString(),
            title: `${element.name} (${element.symbol})`,
            description: `Atomic #${element.number} | Mass: ${element.atomic_mass}`,
            input_message_content: {
                message_text: getElementInfo(element),
                parse_mode: 'Markdown'
            }
        });
    });
    ctx.answerInlineQuery(results);
});

bot.on('text', (ctx) => {
    const query = ctx.message.text.trim();
    if (query.startsWith('/')) return;
    const element = findElement(query);
    if (element) {
        ctx.replyWithMarkdown(getElementInfo(element));
    }
});

bot.catch((err) => {
    console.error('Bot error:', err);
});

bot.launch().then(() => {
    console.log('Periodic Table Bot is running!');
});

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
