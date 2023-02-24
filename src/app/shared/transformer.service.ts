import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CSVElement } from '../pprl-data-view/pprl-data-view.component';
import { Transformer } from './transformer.model';
import { GlobalTransformers } from './global-transformers.model';
import { GlobalTransformersNameEnum } from './global-transformers-name-enum.model';
import { AttributeTransformers } from './attribute-transformers.model';
import { AttributeTransformersTransformers } from './attribute-transformers-transformers.model';

@Injectable()
export class TransformerService {
  transformerUrl: string = '/'

  constructor(private http: HttpClient) { }

  transformData(data: CSVElement[]) {
    let transformerBody: Transformer = new Transformer();
    transformerBody.entities = data;
    transformerBody.globalTransformers = this.createGlobalTransformer();
    transformerBody.attributeTransformers = this.createAttributeTransformers(); 
    
    return this.http.post<{entities: CSVElement[]}>(this.transformerUrl, transformerBody);
  }

  private createGlobalTransformer(): GlobalTransformers[] {
    let globalTransformer: GlobalTransformers = new GlobalTransformers();
    globalTransformer.name = GlobalTransformersNameEnum.NORM;
    globalTransformer.order = "before";
    return [globalTransformer];
  }

  private createAttributeTransformers(): AttributeTransformers[] {
    let attributeTransformers: AttributeTransformers[] = [];

    let firstNameTransformer: AttributeTransformers = new AttributeTransformers();
    firstNameTransformer.attributeName = 'firstName';
    let firstNameAttributeTransformer: AttributeTransformersTransformers = new AttributeTransformersTransformers();
    firstNameAttributeTransformer.name = 'charFilter';
    firstNameTransformer.transformers = [firstNameAttributeTransformer];

    let lastNameTransformer: AttributeTransformers = new AttributeTransformers();
    lastNameTransformer.attributeName = 'lastName';
    let lastNameAttributeTransformer: AttributeTransformersTransformers = new AttributeTransformersTransformers();
    lastNameAttributeTransformer.name = 'charFilter';
    lastNameTransformer.transformers = [lastNameAttributeTransformer];

    let birthDateTransformer: AttributeTransformers = new AttributeTransformers();
    birthDateTransformer.attributeName = 'birthDate';
    let birthDateAttributeTransformer: AttributeTransformersTransformers = new AttributeTransformersTransformers();
    birthDateAttributeTransformer.name = 'dateTime';
    birthDateAttributeTransformer.inputFormat = 'yyyy-MM-dd';
    birthDateAttributeTransformer.outputFormat = 'yyyyMMdd';
    birthDateTransformer.transformers = [birthDateAttributeTransformer];

    attributeTransformers[0] = firstNameTransformer;
    attributeTransformers[1] = lastNameTransformer;
    attributeTransformers[2] = birthDateTransformer;

    return attributeTransformers;
  }
}