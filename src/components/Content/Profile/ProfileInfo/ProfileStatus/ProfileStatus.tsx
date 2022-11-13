import React, {ChangeEvent, KeyboardEvent} from 'react';
import s from './ProfileStatus.module.css'

type ProfileStatusPropsType = {
    aboutMe: null | string
    isMyAccountPage: boolean
    changeProfileStatus: (aboutMe: string) => void
}

export class ProfileStatus extends React.Component<ProfileStatusPropsType> {

    state = {
        isChanging: false,
        aboutMe: this.props.aboutMe
    }

    setIsChangingTrue = () => {
        this.props.isMyAccountPage
        && this.setState({isChanging: true});
    }
    setIsChangingFalse = () => {
        if (this.state.aboutMe) {
            this.setState({isChanging: false});
            this.props.changeProfileStatus(this.state.aboutMe);
        }

    }

    changeAboutMe = (event: ChangeEvent<HTMLInputElement>) => {
        let aboutMe = event.currentTarget.value;
        this.setState({aboutMe});
    }
    onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        event.key === 'Enter' && this.setIsChangingFalse();
    }

    render() {

        let renderStatus = this.props.aboutMe ? this.props.aboutMe : this.props.isMyAccountPage ? 'Set your status...' : '';

        return (
            <div>
                {!this.state.isChanging
                ?  <span
                        className={s.status}
                        onDoubleClick={this.setIsChangingTrue}>
                        {renderStatus}
                </span>
                : <input
                        type={'text'}
                        value={this.state.aboutMe ? this.state.aboutMe: ''}
                        autoFocus
                        onBlur={this.setIsChangingFalse}
                        onChange={this.changeAboutMe}
                        onKeyPress={this.onKeyPressHandler}
                    />}
            </div>
        );
    }
}