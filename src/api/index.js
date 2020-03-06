import index from '@/utils/index';

export function getIndex(oParams){
  return index.get('/get/index', {
    params: oParams.params
  });
};