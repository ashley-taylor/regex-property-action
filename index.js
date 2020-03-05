const core = require('@actions/core');


try {
    const value = core.getInput('value');
    const regex = core.getInput('regex');
    const replacement = core.getInput('replacement');
    
    const re = new RegExp(regex);
    core.setOutput("value", value.replace(re, replacement));
  } catch (error) {
    core.setFailed(error.message);
  }