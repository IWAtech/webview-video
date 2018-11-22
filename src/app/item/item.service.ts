import { Injectable } from "@angular/core";

import { Item } from "./item";

@Injectable({
  providedIn: "root"
})
export class ItemService {
  private items = new Array<Item>(
    { id: 1, name: "Ter Stegen", role: "Goalkeeper" },
    { id: 3, name: "Piqué", role: "Defender" },
    { id: 4, name: "I. Rakitic", role: "Midfielder" },
    { id: 5, name: "Sergio", role: "Midfielder" },
    { id: 6, name: "Denis Suárez", role: "Midfielder" },
    { id: 7, name: "Arda", role: "Midfielder" },
    { id: 8, name: "A. Iniesta", role: "Midfielder" },
    { id: 9, name: "Suárez", role: "Forward" },
    { id: 10, name: "Messi", role: "Forward" },
    { id: 11, name: "Neymar", role: "Forward" },
    { id: 12, name: "Rafinha", role: "Midfielder" },
    { id: 13, name: "Cillessen", role: "Goalkeeper" },
    { id: 14, name: "Mascherano", role: "Defender" },
    { id: 17, name: "Paco Alcácer", role: "Forward" },
    { id: 18, name: "Jordi Alba", role: "Defender" },
    { id: 19, name: "Digne", role: "Defender" },
    { id: 20, name: "Sergi Roberto", role: "Midfielder" },
    { id: 21, name: "André Gomes", role: "Midfielder" },
    { id: 22, name: "Aleix Vidal", role: "Midfielder" },
    { id: 23, name: "Umtiti", role: "Defender" },
    { id: 24, name: "Mathieu", role: "Defender" },
    { id: 25, name: "Masip", role: "Goalkeeper" },
  ).map((it) => Object.assign(it, {
    // video: 'https://www.youtube.com/embed/t6rHHnABoT8',
    video: 'https://clips.twitch.tv/embed?autoplay=true&clip=EagerPluckyTrayKappaWealth&tt_content=embed&tt_medium=clips_embed',
  })).map((it) => Object.assign(it, {
    // videoEmbed: '<!DOCTYPE html><html><body style="margin: 0"><iframe width="100%" height="350" src="https://www.youtube.com/embed/t6rHHnABoT8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></body></html>'
    // videoEmbed: '<!DOCTYPE html><html><body style="margin: 0"><iframe width="100%" height="350" src="https://clips.twitch.tv/embed?autoplay=true&clip=EagerPluckyTrayKappaWealth&tt_content=embed&tt_medium=clips_embed" frameborder="0" scrolling="no" allowfullscreen="false"></iframe></body></html>'
    videoEmbed: '<!DOCTYPE html><html><body style="margin: 0"><iframe width="100%" height="350" src="https://www.dailymotion.com/embed/video/x6xljtx?autoPlay=1" frameborder="0" allowfullscreen="" allow="autoplay"></iframe></body></html>',
  }));

  getItems(): Item[] {
    return this.items;
  }

  private count = 0;
  getItem(id: number): Item {
    console.log(`opens: ${++this.count}`);
    return this.items.filter(item => item.id === id)[0];
  }
}
