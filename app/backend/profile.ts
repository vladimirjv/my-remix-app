import ProfileJson from "../../meta/profile.json";

export type Profile = {
    name: string;
    employment: string;
    location: string;
    latitude?: number;
    longitude?: number;
    description: string;
    contactLink: "",
    links: LinkSocial[];
};
type LinkSocial = {
    name: string;
    url: string;
    icon: string;
};
export const getProfileInfo = () => {
    return ProfileJson;
}