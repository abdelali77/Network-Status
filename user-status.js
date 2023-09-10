#!/usr/bin/env node

import isOnline from 'is-online';

const resetColor = "\x1b[0m";
const greenColor = "\x1b[32m";
const redColor = "\x1b[31m";

async function checkInternetStatus() {
  try {
    const status = await isOnline()

    if (status) {
      console.log(greenColor + "🟢 You're Online" + resetColor);
    } else {
      console.log(redColor + "🔴 You're OffLine" + resetColor);
    }
  } catch (error) {
    console.log('Error:', error.message)
  }
}

checkInternetStatus();