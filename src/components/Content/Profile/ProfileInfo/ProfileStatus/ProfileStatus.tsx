import React, {ChangeEvent, KeyboardEvent} from 'react';
import s from './ProfileStatus.module.css'
import {AboutMeType} from "../../../../../redux/profile-reducer";
import {PreloaderStatus} from "../../../../commons/PreloaderStatus/PreloaderStatus";

type ProfileStatusPropsType = {
    aboutMe: null | AboutMeType
    isMyAccountPage: boolean
    changeProfileStatus: (aboutMe: string) => void
};
type StateType = {
    isChanging: boolean
    status: undefined | null | string
};

export class ProfileStatus extends React.Component<ProfileStatusPropsType> {

    state: StateType

    constructor(props: ProfileStatusPropsType) {
        super(props);
        this.state = {
            isChanging: false,
            status: this.props.aboutMe?.status
        }
    }



    componentDidUpdate(prevProps: Readonly<ProfileStatusPropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if (prevProps.aboutMe && this.props.aboutMe && prevProps.aboutMe.status !== this.props.aboutMe.status) {
            this.setState({status: this.props.aboutMe.status})
        }
    }

    setIsChangingTrue = () => {
        this.props.isMyAccountPage
        && this.setState({isChanging: true});
    }
    setIsChangingFalse = () => {
        if (this.state.status !== null && this.state.status !== undefined) {
            this.props.changeProfileStatus(this.state.status);
        }
        this.setState({isChanging: false});

    }

    updateStatusHandler = (event: ChangeEvent<HTMLInputElement>) => {
        let status = event.currentTarget.value;
        this.setState({status});
    }
    onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        event.key === 'Enter' && this.setIsChangingFalse();
    }

    render() {

        let renderStatus = this.props.aboutMe?.status ? this.props.aboutMe.status : this.props.isMyAccountPage ? 'Set your status...' : 'User has not set status :(';

        return (
            <div className={s.profileStatusWrapper}>
                {this.props.aboutMe?.isLoading
                    ? <PreloaderStatus/>
                    : !this.state.isChanging
                        ? <span
                            className={s.status}
                            onDoubleClick={this.setIsChangingTrue}>
                        {renderStatus}
                </span>
                        : <input
                            type={'text'}
                            value={this.state.status ? this.state.status : ''}
                            autoFocus
                            onBlur={this.setIsChangingFalse}
                            onChange={this.updateStatusHandler}
                            onKeyPress={this.onKeyPressHandler}
                        />}
            </div>
        );
    }
}