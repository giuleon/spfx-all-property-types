import * as React from 'react';
import { css } from 'office-ui-fabric-react';
import styles from './SharePointFrameworkPropertyTypes.module.scss';
import { ISharePointFrameworkPropertyTypesProps } from './ISharePointFrameworkPropertyTypesProps';

export default class SharePointFrameworkPropertyTypes extends React.Component<ISharePointFrameworkPropertyTypesProps, void> {
  public render(): React.ReactElement<ISharePointFrameworkPropertyTypesProps> {
    return (
      <div className={styles.helloWorld}>
        <div className={styles.container}>
          <div className={css('ms-Grid-row ms-bgColor-themeDark ms-fontColor-white', styles.row)}>
            <div className='ms-Grid-col ms-u-lg10 ms-u-xl8 ms-u-xlPush2 ms-u-lgPush1'>
              <span className='ms-font-xl ms-fontColor-white'>
                Welcome to the property types demo!
              </span>
              <p className='ms-font-l ms-fontColor-white'>
                Name: {this.props.name}
              </p>
              <p className='ms-font-l ms-fontColor-white'>
                Bio: {this.props.bio}
              </p>
              <p className='ms-font-l ms-fontColor-white'>
                How much do you love Office 365? {this.props.loveOffice365}
              </p>
              <p className='ms-font-l ms-fontColor-white'>
                What are your favorites heroes? {this.props.heroes}
              </p>
              <p className='ms-font-l ms-fontColor-white'>
                Do you like SharePoint: {this.props.choiceLike == true ? "Yes" : "No"}
              </p>
              <p className='ms-font-l ms-fontColor-white'>
                Do you want to receive email? {this.props.receiveEmails == true ? "Yes" : "No"}
              </p>
              <p className='ms-font-l ms-fontColor-white'>
                Level of satisfaction: {this.props.maxResultsProp + " %"}
              </p>
              <p className='ms-font-l ms-fontColor-white'>
                What is the software most used by you: {this.props.fileType}
              </p>
              <p className='ms-font-l ms-fontColor-white'>
                Website: {this.props.link}
              </p>
              <a className={css('ms-Button', styles.button)}
                 href='https://github.com/SharePoint/sp-dev-docs/wiki'>
                <span className='ms-Button-label'>Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
