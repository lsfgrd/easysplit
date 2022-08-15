import { useEffect, useState, useRef } from 'react';
import Fuse from 'fuse.js';

const useFuzzySearch = <T,>(
  data: T[],
  term: string,
  opts: Fuse.IFuseOptions<T>
) => {
  const [results, setResult] = useState<Fuse.FuseResult<T>[]>([]);
  const fuseRef = useRef(new Fuse(data, opts));

  useEffect(() => {
    fuseRef.current.setCollection(data);
  }, [data]);

  useEffect(() => {
    setResult(fuseRef.current.search(term));
  }, [term, data]);

  return results.map((result) => result.item);
};

export default useFuzzySearch;
