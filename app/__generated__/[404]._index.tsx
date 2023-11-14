/* eslint-disable */
/* This is a auto generated file for building the project */ 

import { type ReactNode, useState } from "react";
import type { PageData } from "~/routes/_index";
import type { Asset, ImageAsset, SiteMeta } from "@webstudio-is/sdk";
import { Body as Body, Box as Box, Heading as Heading, Paragraph as Paragraph, Image as Image, Text as Text, Button as Button } from "@webstudio-is/sdk-components-react";

export const fontAssets: Asset[] = []
export const imageAssets: ImageAsset[] = [{"id":"09a04c1e-28d3-4a28-ae61-6f1079a9c823","name":"card-get-started-icon-ar_1grSx8GEKfADhVrfxzQrS.svg","description":null,"projectId":"b35a1473-4ef1-4be3-93d2-30cf8d9ebf0f","size":2641,"type":"image","format":"svg","createdAt":"2023-11-13T12:40:51.697Z","meta":{"width":25,"height":28}}]
export const pageData: PageData = {"page":{"id":"RDOYjj5chw2I7ZOjyaC28","name":"404","title":"404","meta":{"description":"","excludePageFromSearch":false,"socialImageAssetId":"","custom":[]},"rootInstanceId":"8p_s4qhYQc_PpFjla1oFt","path":"/404"}};
export const user: { email: string | null } | undefined = {"email":"meshcheriakov@vectary.com"};
export const projectId = "b35a1473-4ef1-4be3-93d2-30cf8d9ebf0f";

const Page = (props: { scripts?: ReactNode }) => {
return <Body
data-ws-id="8p_s4qhYQc_PpFjla1oFt"
data-ws-component="Body">
<Box
data-ws-id="9rG4aRApBcFQewdY84lwg"
data-ws-component="Box">
<Heading
data-ws-id="UcTRdocJj4opgY6IekLAt"
data-ws-component="Heading">
{"Oops!"}
</Heading>
<Paragraph
data-ws-id="hh8RY_Z0uJcf4spwostPQ"
data-ws-component="Paragraph">
{"We can't seem to find the page you're looking for."}
</Paragraph>
<Image
data-ws-id="BpOvxVUukPk_xXY-Rfq43"
data-ws-component="Image"
src={"https://images.pexels.com/photos/6975523/pexels-photo-6975523.jpeg?wsai=true"}
alt={"A confused robot looking at a map"}
width={200}
height={200}
title={"Credit: KoolShooters"} />
<Text
data-ws-id="7TtDIib1CfGfsPwH_qAqR"
data-ws-component="Text">
{"Error code: 404"}
</Text>
<Button
data-ws-id="AFJAEYjsYcgoy3In32eAP"
data-ws-component="Button">
{"Go Home"}
</Button>
</Box>
{props.scripts}
</Body>
}


export { Page }


  export const pagesPaths = new Set(["","/ai-test","/404"])

  export const formsProperties = new Map<string, { method?: string, action?: string }>([])
  
