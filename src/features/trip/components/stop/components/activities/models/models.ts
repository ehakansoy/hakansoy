export interface ActivityProps {
    img?: string;
    info_url: string;
    booking_url: string;
    confirmation_url?: string;
    description: string;
    gmaps_url: string;
}

export interface SectionProps {
    title: string;
    activities: { [key: string]: ActivityProps };
}
