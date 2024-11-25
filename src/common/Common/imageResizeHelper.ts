import ImageResizer from '@bam.tech/react-native-image-resizer';
import RNFS from 'react-native-fs';

export const resizeImage = async ({
  uri,
  maxWidth = 100,
  maxHeight = 100,
  compressFormat = 'JPEG',
  quality = 20,
  rotation = 0,
  outputPath = null as any,
  keepMeta = false,
  options = {mode: 'contain'},
}: {
  uri: string;
  maxWidth: number;
  maxHeight: number;
  compressFormat?: any;
  quality?: number;
  rotation?: number;
  outputPath?: string;
  keepMeta?: boolean;
  options?: any;
}): Promise<{
  uri(uri: any): unknown;
  base64: string;
  size: number;
}> => {
  console.log('uri', uri);
  try {
    const {path} = await ImageResizer.createResizedImage(
      uri,
      maxWidth,
      maxHeight,
      compressFormat,
      quality,
      rotation,
      outputPath,
      keepMeta,
      options,
    );
    const base64 = await RNFS.readFile(path, 'base64');
    const {size} = await RNFS.stat(path);
    return {base64, size};
  } catch (e) {
    return {base64: '', size: 0};
  }
};
