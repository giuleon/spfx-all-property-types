declare interface ISharePointFrameworkPropertyTypesStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  AdvancedGroupName: string;
  NameFieldLabel: string;
  BioFieldLabel: string;
  ChoiceLikeFieldLabel: string;
  LoveOffice365FieldLabel: string;
  ReceiveEmailsFieldLabel: string;
  HeroesFieldLabel: string;
  MaxResultsPropFieldLabel: string;
  LinkPropFieldLabel: string;
  FileTypePropFieldLabel: string;
}

declare module 'sharePointFrameworkPropertyTypesStrings' {
  const strings: ISharePointFrameworkPropertyTypesStrings;
  export = strings;
}
