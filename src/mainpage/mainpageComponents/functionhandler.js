import { useState } from "react";

// Datenabruf Mitarbeiter
export async function DatenabrufMitarbeiter () {

  try {
    const request = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({

      })
    };

    const res = await fetch('http://localhost/anruferliste/backend/mitarbeiter.php', request);
    const mData = await res.json();

    return mData;

  } catch (error) {
    console.error('Error fetching data:', error);
  }

}

// Datenabruf Art
export async function DatenabrufArt () {

  try {
    const request = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({

      })
    };

    const res = await fetch('http://localhost/anruferliste/backend/art.php', request);
    const aData = await res.json();

    return aData;

  } catch (error) {
    console.error('Error fetching data:', error);
  }

}

// Datenabruf Handelspartner
export async function DatenabrufKunden () {

  try {
    const request = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({

      })
    };

    const res = await fetch('http://localhost/anruferliste/backend/handelspartner.php', request);
    const handelspartnerData = await res.json();

    return handelspartnerData;

  } catch (error) {
    console.log('Error fetching data:', error);
  }
}

// Datenabruf eingetragene Anrufe
export async function DatenabrufAnrufe () {

  try{
    const request = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({

      })
    }

    const res = await fetch('http://localhost/anruferliste/backend/anrufe.php', request);
    const anrufeData = await res.json();

    return anrufeData;

  } catch (error) {
    console.log('Error fetching data:', error)
  }
}