const { getInput, setOutput, setFailed } = require('@actions/core');

try {
  const value = getInput('value');
  const regex = getInput('regex');
  const flags = getInput('flags');
  const replacement = getInput('replacement');

  const re = new RegExp(regex, flags);
  setOutput('value', value.replace(re, replacement));
} catch (error) {
  setFailed(error.message);
}
