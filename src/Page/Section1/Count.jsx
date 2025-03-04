import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

function Count() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  const stats = [
    { value: 10, label: "Certified Engineers", suffix: "+" },
    { value: 2000, label: "Happy Clients", suffix: "+" },
    { value: 14, label: "States", suffix: "+" },
    { value: 300, label: "Projects Done", suffix: "+" },
  ];

  return (
    <div className="gridsection" ref={ref}>
      {stats.map((stat, index) => (
        <div key={index} className="flex-col-center">
          <h1 className="ten">
            <CountUp
              end={stat.value}
              duration={1.5}
              suffix={stat.suffix}
              start={0}
              enableScrollSpy
            />
          </h1>
          <span className="numberhead">{stat.label}</span>
        </div>
      ))}
    </div>
  );
}

export default Count;
