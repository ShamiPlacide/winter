import sys
import string
from collections import Counter
from typing import List, Dict


class TextAnalyzer:
    def __init__(self, text: str):
        self.original_text = text
        self.cleaned_words: List[str] = []

    def clean(self, min_length: int = 1) -> List[str]:
        """
        - Lowercase text
        - Remove punctuation
        - Split into words
        - Filter out short words using a list comprehension
        """
        translator = str.maketrans("", "", string.punctuation)
        lowered = self.original_text.lower()
        no_punct = lowered.translate(translator)

        # List comprehension: normalize, split, filter short words
        self.cleaned_words = [
            word
            for word in no_punct.split()
            if len(word) >= min_length
        ]
        return self.cleaned_words

    def word_count(self) -> int:
        """Total number of cleaned words."""
        if not self.cleaned_words:
            self.clean()
        return len(self.cleaned_words)

    def most_common(self, n: int = 5) -> List[tuple]:
        """Return the n most common words as (word, count) tuples."""
        if not self.cleaned_words:
            self.clean()
        counter = Counter(self.cleaned_words)
        return counter.most_common(n)

    def unique_words(self) -> List[str]:
        """Return a sorted list of unique cleaned words."""
        if not self.cleaned_words:
            self.clean()
        # List comprehension + set
        return sorted({word for word in self.cleaned_words})


def save_results(output_path: str, data: Dict) -> None:
    """
    Helper function to save analysis results to a file.
    """
    lines = [
        "Text Analysis Summary",
        "====================",
        f"Total words (cleaned): {data['word_count']}",
        f"Unique words: {len(data['unique_words'])}",
        "",
        "Most common words:",
    ]
    lines.extend(
        f"- {word}: {count}"
        for word, count in data["most_common"]
    )
    lines.append("")
    lines.append("Sample of unique words:")
    lines.append(", ".join(data["unique_words"][:50]))

    with open(output_path, "w", encoding="utf-8") as f:
        f.write("\n".join(lines))


def main() -> None:
    if len(sys.argv) < 2:
        print("Usage: python textclean.py <input_file_path>")
        sys.exit(1)

    input_path = sys.argv[1]

    try:
        with open(input_path, "r", encoding="utf-8") as f:
            text = f.read()
    except FileNotFoundError:
        print(f"Error: file not found: {input_path}")
        sys.exit(1)

    analyzer = TextAnalyzer(text)

    # Clean and analyze
    analyzer.clean(min_length=2)  # filter out very short words
    word_count = analyzer.word_count()
    most_common_words = analyzer.most_common(5)
    unique = analyzer.unique_words()

    # Print stats to terminal
    print("=== Text Analysis ===")
    print(f"File: {input_path}")
    print(f"Total words (cleaned): {word_count}")
    print(f"Unique words: {len(unique)}")
    print("Most common words:")
    for word, count in most_common_words:
        print(f"  {word}: {count}")

    # Save to summary file
    output_path = "analysis_output.txt"
    data = {
        "word_count": word_count,
        "most_common": most_common_words,
        "unique_words": unique,
    }
    save_results(output_path, data)
    print(f"\nSummary written to: {output_path}")


if __name__ == "__main__":
    main()
