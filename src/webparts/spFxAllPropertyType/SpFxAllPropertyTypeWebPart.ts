import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
  PropertyPaneCheckbox,
  PropertyPaneSlider,
  PropertyPaneDropdown,
  PropertyPaneToggle,
  PropertyPaneChoiceGroup,
  PropertyPaneLink
} from '@microsoft/sp-webpart-base';

import * as strings from 'SpFxAllPropertyTypeWebPartStrings';
import SpFxAllPropertyType from './components/SpFxAllPropertyType';
import { ISpFxAllPropertyTypeProps } from './components/ISpFxAllPropertyTypeProps';

export interface ISpFxAllPropertyTypeWebPartProps {
  name: string;
  bio: string;
  choiceLike: boolean;
  loveOffice365: string;
  receiveEmails: boolean;
  heroes: string;
  maxResultsProp: number;
  fileType: string;
  link: string;
}

export default class SpFxAllPropertyTypeWebPart extends BaseClientSideWebPart<ISpFxAllPropertyTypeWebPartProps> {

  public render(): void {
    const element: React.ReactElement<ISpFxAllPropertyTypeProps > = React.createElement(
      SpFxAllPropertyType,
      {
        name: this.properties.name,
        bio: this.properties.bio,
        choiceLike: this.properties.choiceLike,
        loveOffice365: this.properties.loveOffice365,
        receiveEmails: this.properties.receiveEmails,
        heroes: this.properties.heroes,
        maxResultsProp: this.properties.maxResultsProp,
        fileType: this.properties.fileType,
        link: this.properties.link
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('name', {
                  label: strings.NameFieldLabel
                })
                ,
                PropertyPaneTextField('bio', {
                  label: strings.BioFieldLabel,
                  multiline: true
                }),
                PropertyPaneDropdown('loveOffice365', {
                  label: strings.LoveOffice365FieldLabel,
                  options: [
                    { key: 'Too Much', text: 'Too Much' },
                    { key: 'Not Much', text: 'Not Much' },
                    { key: 'Almost Hate it', text: 'Almost Hate it' },
                    { key: 'Definitely Hate it', text: 'Definitely Hate it' }
                  ]}),
                PropertyPaneChoiceGroup('heroes', {
                  label: strings.HeroesFieldLabel,
                  options: [
                    { key: 'Hulk', text: 'Hulk' },
                    { key: 'Thor', text: 'Thor' },
                    { key: 'Captain America', text: 'Captain America' },
                    { key: 'Ironman', text: 'Ironman' }
                    ]
                  }
                )
              ]
            }
          ]
        },
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.AdvancedGroupName,
              groupFields: [
                PropertyPaneCheckbox('choiceLike', {
                  text: strings.ChoiceLikeFieldLabel
                }),
                PropertyPaneToggle('receiveEmails', {
                  label: strings.ReceiveEmailsFieldLabel,
                  onText: 'On',
                  offText: 'Off'
                }),
                PropertyPaneSlider('maxResultsProp', { 
                  label: strings.MaxResultsPropFieldLabel, 
                  min: 0, 
                  max: 100, 
                  step: 1, 
                  showValue: true, 
                  value: 10 
                }),
                PropertyPaneChoiceGroup('fileType', {
                  label: strings.FileTypePropFieldLabel,
                  options: [
                    { key: 'Word', text: 'Word',
                      imageSrc: 'https://static2.sharepointonline.com/files/fabric/assets/brand-icons/document/png/docx_32x1.png',
                      imageSize: { width: 32, height: 32 },
                      selectedImageSrc: 'https://static2.sharepointonline.com/files/fabric/assets/brand-icons/document/png/docx_32x1.png'
                    },
                    { key: 'Excel', text: 'Excel',
                      imageSrc: 'https://static2.sharepointonline.com/files/fabric/assets/brand-icons/document/png/xlsx_32x1.png',
                      imageSize: { width: 32, height: 32 },
                      selectedImageSrc: 'https://static2.sharepointonline.com/files/fabric/assets/brand-icons/document/png/xlsx_32x1.png'
                    },
                    { key: 'PowerPoint', text: 'PowerPoint',
                      imageSrc: 'https://static2.sharepointonline.com/files/fabric/assets/brand-icons/document/png/pptx_32x1.png',
                      imageSize: { width: 32, height: 32 },
                      selectedImageSrc: 'https://static2.sharepointonline.com/files/fabric/assets/brand-icons/document/png/pptx_32x1.png'
                    },
                    { key: 'OneNote', text: 'OneNote',
                      imageSrc: 'https://static2.sharepointonline.com/files/fabric/assets/brand-icons/document/png/one_32x1.png',
                      imageSize: { width: 32, height: 32 },
                      selectedImageSrc: 'https://static2.sharepointonline.com/files/fabric/assets/brand-icons/document/png/one_32x1.png'
                    }
                  ]
                }),
                PropertyPaneLink('link', {
                    href: 'http://www.delucagiuliano.com',
                    text: 'GDL blog',
                    target: '_blank',
                    popupWindowProps: {
                      height: 500,
                      width: 500,
                      positionWindowPosition: 2,
                      title: 'GDL blog'
                    }
                })
              ]
            }
          ]
        },
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [{
            groupName: strings.BasicGroupName,
            groupFields: [
              PropertyPaneTextField('title', {
                label: "Look here"
              })
            ]
          }, 
          {
            groupName: strings.AdvancedGroupName,
            groupFields: [
              PropertyPaneToggle('external', {
                label: "This is cool"})
              ]
          }],
          displayGroupsAsAccordion: true
        }
      ]
    };
  }
}
