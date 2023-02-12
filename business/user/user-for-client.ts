import User from './user';
import {
  ISignInResponse,
  IUserBaseInfo,
} from '../../types/request-response/user.interface';
import {
  TOKEN_EXPIRES_TIME_FIELD,
  TOKEN_FIELD,
  USER_BASE_INFO_FIELD,
} from '../../config/constant';
// import { dispatcher } from '../../store';
import dayJS, { ManipulateType } from 'dayjs';
import { IUserAvatarConfig } from './user.interface';

class UserForClient extends User {
  static checkIsSignIn(): boolean {
    let isSignIn = false;
    const hasToken = !!uni.getStorageSync(TOKEN_FIELD);
    let userBaseInfo;
    try {
      userBaseInfo = uni.getStorageSync(USER_BASE_INFO_FIELD);
    } catch (err) {
      // If occur when parsing, that means sign in fail.
    }
    if (hasToken && userBaseInfo) isSignIn = true;
    return isSignIn;
  }

  static getUserBaseInfoFromLocal(): IUserBaseInfo | null {
    const baseInfoString = uni.getStorageSync(USER_BASE_INFO_FIELD);
    return baseInfoString || null;
  }

  static getUserAvatarConfig(userBaseInfo: IUserBaseInfo): IUserAvatarConfig {
    const { nickName, avatar } = userBaseInfo;
    return {
      alt: nickName,
      src: avatar,
    };
  }

  static removeUserInfoFromLocal(): void {
    uni.removeStorageSync(TOKEN_FIELD);
    uni.removeStorageSync(TOKEN_EXPIRES_TIME_FIELD);
    uni.removeStorageSync(USER_BASE_INFO_FIELD);
  }

  static saveSignInInfoToLocal(signInResponse: ISignInResponse): void {
    const { token, ...userBaseInfo } = signInResponse.data;
    const expireTimeStr = String(dayJS().add(User.TOKEN_EXPIRE_TIME, User.TOKEN_EXPIRE_UNIT as ManipulateType).valueOf());
    uni.setStorageSync(TOKEN_FIELD, token);
    uni.setStorageSync(TOKEN_EXPIRES_TIME_FIELD, expireTimeStr);
    uni.setStorageSync(USER_BASE_INFO_FIELD, userBaseInfo);
  }

  /**
   * Remove user info if it is illegal.
   * @returns user is validation.
   */
  static removeUserInfoIfIllegal(): boolean {
    let illegal = false;
    const token = uni.getStorageSync(TOKEN_FIELD);
    const expireTime = uni.getStorageSync(TOKEN_EXPIRES_TIME_FIELD);
    const userBaseInfo = uni.getStorageSync(USER_BASE_INFO_FIELD);
    if (
      !token
      || !expireTime
      || !userBaseInfo
      || dayJS().isAfter(Number(expireTime))
    ) illegal = true;
    if (illegal) {
      UserForClient.removeUserInfoFromLocal();
      // dispatcher.setUser(null);
    }
    return illegal;
  }
}

export default UserForClient;
