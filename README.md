# Necropolis Modding Hub

> *"The game died. We didn't get the memo."*

A static website for the Necropolis modding community. Because apparently some of us looked at a dead game from 2016 and said "yeah, I can fix that". Shoutout to BepInEx for being a thing.

## What Is This?

The official-unofficial hub for Necropolis mods, guides, and the handful of people still descending into procedurally generated Abraxis' residence in 2025.

**Features:**
- BepInEx installation guide (for the brave)
- Mod showcase (for the blessed)
- Random color themes (because even the website has roguelike elements)
- A 404 page (you'll find it eventually)

## Tech Stack

- **HTML** - Yes, just HTML. Pure, uncut markup.
- **CSS** - Hand-crafted styles with CSS variables for that sweet random color theming.
- **JavaScript** - As vanilla as it gets.
- **Build Tools** - None. Deploying it like it's 2005 and proud of it.

## Project Structure

```
necropolis/
├── index.html          # The front door
├── 404.html            # The back door (you weren't supposed to find this)
├── mods.html           # The treasure room
├── mods/
│   └── mod-config-menu.html  # Individual mod pages live here
├── css/
│   └── styles.css      # Shared styles (the real MVP)
├── js/
│   └── main.js         # Shared scripts (theme randomizer lives here)
├── sitemap.xml         # For the search engine crawlers
└── robots.txt          # Politely asking bots to behave
```

## The Color Thing

Every page load picks a random accent color. Yes, it's like the game's random floor lighting system, that was the inspiration. Available colors:

- Cyan (default, iconic)
- Light Red (blood of your enemies)
- Light Blue (tears of your failures)
- Light Purple (vibes)
- Light Yellow (treasure ahead)
- Light Green (poison, probably)
- Light Gray (your soul after floor 6)
- Light Pink (unexpected optimism)

## Credits

- **Harebrained Schemes** - Made the game
- **Paradox Interactive** - Owns the IP
- **The Modding Community** - Refused to let it die
- **Me** - I designed this
- **You** - For scrolling this far
---

*Necropolis Modding Hub is a fan project with no official affiliation to Harebrained Schemes or Paradox Interactive. We're just here because we have unfinished business with the Brazen Head.*
