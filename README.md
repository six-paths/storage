
# Storage

## Installation

Add the following to your packages.json file

    "@six-paths/storage": "github:six-paths/storage#0.0.1"

## Usage

    import Storage from '@six-paths/storage';

### Load

    Storage.load([<key | null>[, <defaultValue | null>]]);

### Save

    Storage.save(<state>);

## Running Tests

    npm install # Install dependencies
    npm build # Build module
    npm test # Run tests
