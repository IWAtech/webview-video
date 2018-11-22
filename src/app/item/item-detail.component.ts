import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { WebView, LoadEventData } from "tns-core-modules/ui/web-view";

import { Item } from "./item";
import { ItemService } from "./item.service";

@Component({
  selector: "ns-details",
  moduleId: module.id,
  templateUrl: "./item-detail.component.html",
})
export class ItemDetailComponent implements OnInit, AfterViewInit {
  @ViewChild('webview') webViewRef: ElementRef;

  item: Item;

  constructor(
    private itemService: ItemService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.params["id"];
    this.item = this.itemService.getItem(id);
  }

  ngAfterViewInit() {
    let webview: WebView = this.webViewRef.nativeElement;
    console.log("WebView is still loading...");

    webview.on(WebView.loadFinishedEvent, function (args: LoadEventData) {
      let message;
      if (!args.error) {
        message = "WebView finished loading of " + args.url;
      } else {
        message = "Error loading " + args.url + ": " + args.error;
      }

      console.log("WebView message - " + message);
    });
    webview.on(WebView.unloadedEvent, function (args: any) {
      console.log("WebView unloaded");
    });
  }
}
