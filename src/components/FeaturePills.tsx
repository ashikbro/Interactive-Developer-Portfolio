export type FeaturePillsProps = {
  features: string[];
};

export function FeaturePills({ features }: FeaturePillsProps) {
  return (
    <ul className="feature-pills">
      {features.map((feature) => (
        <li key={feature}>{feature}</li>
      ))}
    </ul>
  );
}
