class TrieNode {
    constructor() {
        this.children = {};
        this.isWord = false;
    }
}

class WordDictionary {
    constructor() {
        this.root = new TrieNode();
    }

    addWord(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isWord = true;
    }

    search(word) {
        return this.searchRecursive(this.root, word, 0);
    }

    searchRecursive(node, word, index) {
        if (index === word.length) {
            return node.isWord;
        }
        if (word[index] === '.') {
            for (let char in node.children) {
                if (this.searchRecursive(node.children[char], word, index + 1)) {
                    return true;
                }
            }
            return false;
        }
        if (!node.children[word[index]]) {
            return false;
        }
        return this.searchRecursive(node.children[word[index]], word, index + 1);
    }
}
```

Kodda `TrieNode` klassi har bir harf uchun kichik klonlarni saqlash uchun ishlatiladi. `WordDictionary` klassi `addWord` metodi orqali so'zni qo'shish uchun va `search` metodi orqali so'zni qidirish uchun ishlatiladi. `search` metodi `searchRecursive` funksiyasini chaqiradi, u har bir harf uchun kichik klonlarni tekshiradi va agar so'z topilsa, `true` qiymatini qaytaradi. Agar so'z topilmagan bo'lsa, `false` qiymatini qaytaradi.
