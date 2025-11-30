
// plugins/markdown-loader.js

export default function markdownLoader() {
  return {
    name: 'markdown-loader',
    transform(code, id) {
      if (!id.endsWith('.md')) return;

      const entries = code.split(/^---$/gm).map(entry => entry.trim()).filter(Boolean);
      const registry = entries.map(entry => {
        const item = {};
        const lines = entry.split('\n');
        let currentKey = null;
        let currentContent = [];
        
        // Helper to save current section
        const saveSection = () => {
          if (!currentKey) return;
          
          const content = currentContent.join('\n').trim();
          
          if (currentKey === 'slug') {
            item.slug = content;
          } else if (currentKey === 'steps' || currentKey === 'details') {
            item[currentKey] = content.split('\n')
              .map(line => line.trim())
              .filter(line => line.startsWith('- '))
              .map(line => line.substring(2).trim());
          } else if (currentKey === 'code') {
            // Parse code blocks
            const codeBlocks = [];
            let currentTitle = '';
            let codeContent = '';
            let inCodeBlock = false;
            let codeLines = [];
            
            content.split('\n').forEach(line => {
              if (line.startsWith('### ')) {
                currentTitle = line.substring(4).trim();
              } else if (line.startsWith('```')) {
                if (inCodeBlock) {
                  // End of block
                  codeBlocks.push({
                    title: currentTitle,
                    content: codeLines.join('\n')
                  });
                  codeLines = [];
                  inCodeBlock = false;
                } else {
                  // Start of block
                  inCodeBlock = true;
                }
              } else if (inCodeBlock) {
                codeLines.push(line);
              }
            });
            item.code = codeBlocks;
          } else {
            item[currentKey] = content;
          }
          
          currentContent = [];
        };

        lines.forEach(line => {
          if (line.startsWith('# ')) {
            saveSection();
            currentKey = 'slug';
            currentContent = [line.substring(2).trim()];
            saveSection(); // slug is single line
            currentKey = null;
          } else if (line.startsWith('## ')) {
            saveSection();
            currentKey = line.substring(3).trim();
          } else {
            currentContent.push(line);
          }
        });
        saveSection(); // Save last section

        return item;
      });

      return `export default ${JSON.stringify(registry)}`;
    }
  };
}
