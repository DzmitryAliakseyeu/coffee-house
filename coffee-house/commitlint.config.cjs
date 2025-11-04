const dayPattern =
  '\\([A-Za-z]+, [A-Za-z]+ \\d{1,2}, \\d{4} \\d{1,2}:\\d{2}:\\d{2} [AP]M\\)$';

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'header-max-length': [2, 'always', 200],
    'type-enum': [2, 'always', ['feat', 'fix', 'chore', 'docs', 'refactor']],
    'header-case': [0, 'always'], // disable built-in casing rule
  },
  
  // Custom validation
  ignores: [(commit) => false], // do not ignore any commit
  plugins: [
    {
      rules: {
        'header-timestamp-format': ({ header }) => {
          const pattern = new RegExp(`^feat: .+ ${dayPattern}`);
          return pattern.test(header)
            ? [true, 'Valid commit message']
            : [false, 'Commit message must be in format: feat: <message> (Day, Month Date, Year hh:mm:ss AM/PM)'];
        },
      },
    },
  ],
  parserPreset: {
    parserOpts: {},
  },
};
