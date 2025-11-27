import type { LanguageCode } from '@/types/language';

export type NavLink = {
  id: string;
  label: string;
};

export const NAV_LINKS: NavLink[] = [
  { id: 'desh', label: 'देश' },
  { id: 'uttar-pradesh', label: 'उत्तर प्रदेश' },
  { id: 'manoranjan', label: 'मनोरंजन' },
  { id: 'khel', label: 'खेल' },
  { id: 'jobs', label: 'जॉब्स' },
  { id: 'lifestyle', label: 'लाइफस्टाइल' },
  { id: 'technology', label: 'टेक्नोलॉजी' },
];

type CopyMap = Record<LanguageCode, string>;

export const CATEGORY_ANCHOR_CONFIG: Record<
  string,
  { anchorId: string; title: CopyMap; subtitle?: CopyMap }
> = {
  Entertainment: {
    anchorId: 'manoranjan',
    title: { hi: 'मनोरंजन', en: 'Entertainment' },
  },
  Sports: {
    anchorId: 'khel',
    title: { hi: 'खेल', en: 'Sports' },
  },
  Technology: {
    anchorId: 'technology',
    title: { hi: 'टेक्नोलॉजी', en: 'Technology' },
  },
  Health: {
    anchorId: 'lifestyle',
    title: { hi: 'लाइफस्टाइल & सेहत', en: 'Lifestyle & Wellness' },
    subtitle: {
      hi: 'स्वास्थ्य और यात्रा से जुड़ी कहानियाँ',
      en: 'Stories on wellbeing and travel',
    },
  },
};

export const CURATED_TAG_SECTIONS = [
  {
    id: 'uttar-pradesh',
    tags: ['up', 'uttar pradesh'],
    title: { hi: 'उत्तर प्रदेश विशेष', en: 'Uttar Pradesh Spotlight' },
    subtitle: {
      hi: 'प्रदेश की प्रमुख सुर्खियाँ',
      en: 'Key stories from the state',
    },
  },
  {
    id: 'jobs',
    tags: ['jobs', 'job', 'employment', 'career'],
    title: { hi: 'जॉब्स अपडेट', en: 'Jobs & Careers' },
    subtitle: {
      hi: 'रोज़गार और नए अवसर',
      en: 'Hiring trends and new opportunities',
    },
  },
];

export const LIFESTYLE_SECTION = {
  id: 'lifestyle',
  categories: ['Health', 'Travel'],
  title: { hi: 'लाइफस्टाइल & सेहत', en: 'Lifestyle & Wellness' },
  subtitle: {
    hi: 'स्वास्थ्य, यात्रा और वेलनेस की खबरें',
    en: 'Health, travel, and wellness highlights',
  },
};



