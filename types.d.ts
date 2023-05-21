export interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}
interface Image {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

export interface SkillType extends SanityBody {
  _type: "skills";
  name: string;
  progress: number;
  icon: Image;
}

export interface CertificateType extends SanityBody {
  _type: "certificate";
  name: string;
  description: number;
  image: Image;
  link : string;
}

