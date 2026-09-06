import { Injectable } from '@angular/core';
import { TranslateDefaultParser } from '@ngx-translate/core';

@Injectable()
export class PortfolioTranslateParser extends TranslateDefaultParser {
  override interpolate(expr: any, params?: any): any {
    // Experience visibility is data, so preserve it during translation interpolation.
    return typeof expr === 'boolean' ? expr : super.interpolate(expr, params);
  }
}
