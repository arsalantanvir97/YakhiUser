import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

export const SliderSkeleton = ({ listsToRender }) => {
  return (
    <>
      <div className="row">
        {Array(listsToRender)
          .fill(1)
          .map((card, index) => (
            <div className="featured-product animate__animated animate__slideInUp ">
              <SkeletonTheme color="#202020" highlightColor="#444">
                <section>
                  <Skeleton height={210} width={240} />
                </section>
              </SkeletonTheme>
            </div>
          ))}
      </div>
    </>
  );
};
