const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    const defaultReportStructure = await prisma.reportStructure.findUnique({
        where: {
            name: 'Urine Report',
        },
    });

    if (!defaultReportStructure) {
        await prisma.reportStructure.create({
            data: {
                name: 'Urine Report',
                fields: [
                    { "name": "Color", "type": "text" },
                    { "name": "Specific Gravity", "type": "number" },
                    { "name": "Appearance", "type": "text" },
                    { "name": "pH", "type": "number" },
                    { "name": "Glucose", "type": "number" },
                    { "name": "Ketones", "type": "number" },
                    { "name": "Proteins", "type": "number" },
                    { "name": "Blood", "type": "number" },
                    { "name": "Nitrite", "type": "number" },
                    { "name": "Bilirubin", "type": "number" },
                    { "name": "Urobilinogen", "type": "number" },
                    { "name": "WBC", "type": "text" },
                    { "name": "Red Blood Cells", "type": "text" },
                    { "name": "Crystals", "type": "number" },
                    { "name": "Amorphous", "type": "number" },
                    { "name": "Misc", "type": "number" },
                    { "name": "Epithelial Cells", "type": "number" },
                    { "name": "Bacteria", "type": "number" },
                    { "name": "Casts", "type": "number" }
                ],
            },
        });
        console.log('Urine report structure created.');
    } else {
        console.log('Urine report structure already exists.');
    }
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
