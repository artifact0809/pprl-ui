import { CSVElement } from "../pprl-data-view/pprl-data-view.component";
import { AttributeTransformers } from "./attribute-transformers.model";
import { GlobalTransformers } from "./global-transformers.model";

export class Transformer {
    entities: CSVElement[];
    globalTransformers: GlobalTransformers[];
    attributeTransformers: AttributeTransformers[];
}