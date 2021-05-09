export const getIconByFileExtension = (extension: string): string => {
  switch (extension) {
    case '.img':
    case '.iso':
      return '/icons/image.png';
    case '.jsdos':
    case '.zip':
      return '/icons/compressed.png';
    case '.mp3':
      return '/icons/music.png';
    default:
      return '/icons/unknown.png';
  }
};

export const getProcessByFileExtension = (extension: string): string => {
  switch (extension) {
    case '.img':
    case '.iso':
      return 'V86';
    case '.jsdos':
    case '.zip':
      return 'JSDOS';
    case '.mp3':
      return 'Webamp';
    default:
      return '';
  }
};
