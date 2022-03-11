const core = require('@actions/core');

try {
  const value = core.getInput('value');
  const regex = core.getInput('regex');
  const flags = core.getInput('flags');
  const replacement = core.getInput('replacement');

  const re = new RegExp(regex, flags);
  core.setOutput("value", value.replace(re, replacement));
} catch (error) {
  core.setFailed(error.message);
}
