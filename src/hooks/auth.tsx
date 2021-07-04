import React, {createContext, ReactNode, useContext, useState, useEffect} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Google from 'expo-google-app-auth';
import * as AppleAuthentication from 'expo-apple-authentication';

import {TRANSACTIONS_KEY, USER_KEY} from "../constants/storage-keys";

interface AuthProviderProps {
    children: ReactNode,
}

interface User {
    id: string;
    name: string;
    email: string;
    photo?: string;
}

interface IAuthContextData {
    user: User;
    signWithGoogle(): Promise<void>;
    singWithApple(): Promise<void>;
    singOut(): Promise<void>;
    userStorageLoading: boolean;
}

export const AuthContext = createContext({} as IAuthContextData);

function AuthProvider({children}: AuthProviderProps) {
    const [user, setUser] = useState<User>({} as User);
    const [userStorageLoading, setUserStorageLoading] = useState(true);

    async function signWithGoogle() {
        try {
            const result = await Google.logInAsync({
                iosClientId: '756895851976-t8f0v1ah46is90ub2hg6766kl3lsr1sq.apps.googleusercontent.com',
                androidClientId: '756895851976-au280fjgv5fkp3807emqhj911h85pcd4.apps.googleusercontent.com',
                scopes: ["profile", "email"]
            })

            if (result.type === 'success') {
                const userLogged = {
                    id: String(result.user.id),
                    email: result.user.email!,
                    name: result.user.name!,
                    photo: result.user.photoUrl!
                }

                setUser(userLogged);
                await AsyncStorage.setItem(USER_KEY, JSON.stringify(userLogged))
            }

        } catch (error) {
            throw new Error(error);
        }
    }

    async function singWithApple() {
        try {
            const credential = await AppleAuthentication.signInAsync({
                requestedScopes: [
                    AppleAuthentication.AppleAuthenticationScope.EMAIL,
                    AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
                ]
            });

            if (credential) {
                const name =  credential.fullName!.givenName!;

                const userLogged = {
                    id: String(credential.user),
                    email: credential.email!,
                    name,
                    photo: `https://ui-avatars.com/api/?name=${name}&length=1`
                }
                setUser(userLogged);
                await AsyncStorage.setItem(USER_KEY, JSON.stringify(userLogged))
            }
        } catch (error) {
            throw new Error(error);
        }
    }

    async function singOut() {
        setUser({} as User);
        await AsyncStorage.removeItem(USER_KEY);
    }

    useEffect(() => {
        async function loadUserStorageData() {
            const userStorage = await AsyncStorage.getItem(USER_KEY);

            if(userStorage) {
                const userLogged = JSON.parse(userStorage) as User;
                setUser(userLogged);
            }

            setUserStorageLoading(false);
        }

        loadUserStorageData();
    }, []);

    return (
        <AuthContext.Provider value={{
            user,
            signWithGoogle,
            singWithApple,
            singOut,
            userStorageLoading
        }}>
            {children}
        </AuthContext.Provider>
    );
}

function useAuth() {
    return useContext(AuthContext)
}

export {AuthProvider, useAuth}
