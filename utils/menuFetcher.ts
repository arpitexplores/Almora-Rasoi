
import { MenuCategory, MenuItem } from '../types';

export async function fetchMenuFromSheet(sheetId: string): Promise<MenuCategory[]> {
  try {
    // Using the gviz API to get CSV data
    const url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:csv`;
    const response = await fetch(url);
    if (!response.ok) throw new Error('Failed to fetch sheet data');
    
    const csvText = await response.text();
    const rows = parseCSV(csvText);
    
    // Assume headers: Category, Name, Price, Unit, Description, Category_Image
    const categoriesMap: Record<string, MenuCategory> = {};

    rows.slice(1).forEach(row => {
      const [category, name, price, unit, description, catImage] = row;
      
      if (!category || !name) return;

      if (!categoriesMap[category]) {
        categoriesMap[category] = {
          id: category.toLowerCase().replace(/\s+/g, '-'),
          title: category,
          image: catImage || 'https://images.unsplash.com/photo-1589119908995-c6837fa14848?auto=format&fit=crop&q=80&w=800',
          items: []
        };
      }

      categoriesMap[category].items.push({
        name,
        price,
        unit,
        description
      });
    });

    return Object.values(categoriesMap);
  } catch (error) {
    console.error('Error fetching menu from Google Sheets:', error);
    return [];
  }
}

function parseCSV(text: string): string[][] {
  const rows: string[][] = [];
  let currentRow: string[] = [];
  let currentToken = '';
  let inQuotes = false;

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const nextChar = text[i + 1];

    if (char === '"') {
      if (inQuotes && nextChar === '"') {
        currentToken += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === ',' && !inQuotes) {
      currentRow.push(currentToken.trim());
      currentToken = '';
    } else if ((char === '\n' || char === '\r') && !inQuotes) {
      if (currentToken || currentRow.length > 0) {
        currentRow.push(currentToken.trim());
        rows.push(currentRow);
        currentToken = '';
        currentRow = [];
      }
      if (char === '\r' && nextChar === '\n') i++;
    } else {
      currentToken += char;
    }
  }
  
  if (currentToken || currentRow.length > 0) {
    currentRow.push(currentToken.trim());
    rows.push(currentRow);
  }

  return rows;
}
