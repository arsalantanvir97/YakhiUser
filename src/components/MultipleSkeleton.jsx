import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

export const ListSkeleton = ({listsToRender}) => {
    return (
      <>
      <div className="row">
        {Array(listsToRender)
          .fill(1)
          .map((card, index) => (
            <div className="col-xl-4 col-md-6">
            <div className="product-card">
  
            <SkeletonTheme color="#202020" highlightColor="#444">
            <section>
              <Skeleton height={350} width={540} />
            </section>
          </SkeletonTheme>
          </div>
          </div>
          ))}
</div>
      </>
    );
  };