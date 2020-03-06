import nlist from '@/utils/nlist';

export function getNewsList(oParams){
  return nlist.get('/get/newslist', {
    params: oParams.params
  });
};