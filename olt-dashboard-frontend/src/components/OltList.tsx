interface Props {
  olts: { id: number; name: string; ip?: string }[];
  onSelect: (id: number) => void;
  selectedOlt: number | null;
}

export default function OltList({ olts, onSelect, selectedOlt }: Props) {
  if (!Array.isArray(olts) || olts.length === 0) {
    return <p>No hay OLTs disponibles.</p>;
  }

  return (
    <ul className="space-y-2">
      {olts.map((olt) => (
        <li
          key={olt.id}
          className={`p-3 border rounded cursor-pointer ${
            selectedOlt === olt.id
              ? 'bg-blue-100 border-blue-500'
              : 'hover:bg-gray-50'
          }`}
          onClick={() => onSelect(olt.id)}
        >
          <div className="font-semibold">{olt.name}</div>
          {olt.ip && <div className="text-sm text-gray-600">{olt.ip}</div>}
        </li>
      ))}
    </ul>
  );
}
