import json
import argparse
import sys
from pathlib import Path

def load_json_from_file(path: str):
    try:
        with open(path, "r") as f:
            return json.load(f)
    except FileNotFoundError:
        print(f"Error: File '{path}' not found.")
        sys.exit(1)
    except json.JSONDecodeError as e:
        print(f"Invalid JSON in file: {e}")
        sys.exit(1)

def load_json_from_string(s: str):
    try:
        return json.loads(s)
    except json.JSONDecodeError as e:
        print(f"Invalid JSON string: {e}")
        sys.exit(1)

def main():
    parser = argparse.ArgumentParser(description="JSON Validator & Formatter CLI Tool")
    parser.add_argument("--file", "-f", help="Path to JSON file")
    parser.add_argument("--string", "-s", help="Raw JSON string")
    parser.add_argument("--output", "-o", help="Output file for formatted JSON")

    args = parser.parse_args()

    if not args.file and not args.string:
        print("Please provide either --file or --string.")
        sys.exit(1)

    if args.file:
        data = load_json_from_file(args.file)
    else:
        data = load_json_from_string(args.string)

    formatted = json.dumps(data, indent=4, sort_keys=True)
    print("\nFormatted JSON:\n")
    print(formatted)

    if args.output:
        Path(args.output).write_text(formatted)
        print(f"\nSaved formatted JSON to: {args.output}")

if __name__ == "__main__":
    main()
